//go:build windows

package main

import (
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"runtime"
	"unsafe"

	"github.com/wailsapp/go-webview2/pkg/edge"
	"github.com/wailsapp/go-webview2/webviewloader"
	"golang.org/x/sys/windows"
)

const (
	appName      = "The Snellifier"
	appHost      = "opening-lab.example"
	explorerHost = "explorer.lichess.ovh"
	// Keep the original profile path and origin so the rename preserves progress.
	profileFolder = "Opening Lab"
)

var (
	user32   = windows.NewLazySystemDLL("user32.dll")
	kernel32 = windows.NewLazySystemDLL("kernel32.dll")
	ole32    = windows.NewLazySystemDLL("ole32.dll")
	shell32  = windows.NewLazySystemDLL("shell32.dll")
	view     *edge.Chromium
)

type windowClass struct {
	size, style                 uint32
	procedure                   uintptr
	classExtra, windowExtra     int32
	module, icon, cursor, brush uintptr
	menu, name                  *uint16
	smallIcon                   uintptr
}

type windowMessage struct {
	window         uintptr
	message        uint32
	wParam, lParam uintptr
	time           uint32
	x, y           int32
	private        uint32
}

func main() {
	runtime.LockOSThread()
	if err := run(); err != nil {
		showError(err.Error())
	}
}

func run() error {
	executable, err := os.Executable()
	if err != nil {
		return err
	}
	assets := filepath.Join(filepath.Dir(executable), "Web")
	if _, err := os.Stat(filepath.Join(assets, "index.html")); err != nil {
		return fmt.Errorf("Extract the full ZIP before opening The Snellifier. Keep the Web folder beside The Snellifier.exe")
	}

	if version, err := webviewloader.GetAvailableCoreWebView2BrowserVersionString(""); err != nil || version == "" {
		return fmt.Errorf("Microsoft Edge WebView2 Runtime is required. Install the Evergreen Runtime from Microsoft, then reopen The Snellifier")
	}
	cache, err := os.UserCacheDir()
	if err != nil {
		return err
	}

	// Initialize a single-threaded COM apartment for WebView2.
	hr, _, _ := ole32.NewProc("CoInitializeEx").Call(0, 2)
	if int32(hr) < 0 {
		return fmt.Errorf("could not initialize Windows components (0x%08x)", uint32(hr))
	}
	defer ole32.NewProc("CoUninitialize").Call()

	window, err := makeWindow()
	if err != nil {
		return err
	}
	view = edge.NewChromium()
	view.DataPath = filepath.Join(cache, profileFolder, "WebView2")
	view.SetGlobalPermission(edge.CoreWebView2PermissionStateDeny)
	view.SetErrorCallback(func(err error) {
		showError("Could not open the WebView2 window. " + err.Error())
		os.Exit(1)
	})
	view.MessageCallback = func(message string, _ *edge.ICoreWebView2, args *edge.ICoreWebView2WebMessageReceivedEventArgs) {
		source, sourceErr := args.GetSource()
		if sourceErr == nil && hasHTTPSHost(source, appHost) && hasHTTPSHost(message, explorerHost) {
			shell32.NewProc("ShellExecuteW").Call(window, uintptr(unsafe.Pointer(wideString("open"))), uintptr(unsafe.Pointer(wideString(message))), 0, 0, 1)
		}
	}

	view.Embed(window)
	origin := view.GetICoreWebView2_3()
	if origin == nil {
		return fmt.Errorf("Microsoft Edge WebView2 Runtime needs an update")
	}
	defer origin.Release()
	if err := origin.SetVirtualHostNameToFolderMapping(appHost, assets, edge.COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND_DENY); err != nil {
		return err
	}
	settings, err := view.GetSettings()
	if err != nil {
		return err
	}
	if err := settings.PutAreHostObjectsAllowed(false); err != nil {
		return err
	}
	if err := settings.PutAreDevToolsEnabled(false); err != nil {
		return err
	}
	view.Init(`document.addEventListener('click', event => {
		const link = event.target.closest('a[href^="https:"]');
		if (!link) return;
		event.preventDefault();
		window.chrome.webview.postMessage(link.href);
	});`)
	view.Resize()
	view.Navigate("https://" + appHost + "/index.html")
	user32.NewProc("ShowWindow").Call(window, 5)
	if err := view.Show(); err != nil {
		return err
	}

	getMessage := user32.NewProc("GetMessageW")
	translate := user32.NewProc("TranslateMessage")
	dispatch := user32.NewProc("DispatchMessageW")
	var message windowMessage
	for {
		result, _, err := getMessage.Call(uintptr(unsafe.Pointer(&message)), 0, 0, 0)
		switch int32(result) {
		case 0:
			return nil
		case -1:
			return err
		}
		translate.Call(uintptr(unsafe.Pointer(&message)))
		dispatch.Call(uintptr(unsafe.Pointer(&message)))
	}
}

func makeWindow() (uintptr, error) {
	module, _, _ := kernel32.NewProc("GetModuleHandleW").Call(0)
	const useDefault = 0x80000000
	icon, _, _ := user32.NewProc("LoadIconW").Call(0, 32512)
	cursor, _, _ := user32.NewProc("LoadCursorW").Call(0, 32512)
	name := windows.StringToUTF16Ptr("OpeningLabMainWindow")
	class := windowClass{
		procedure: windows.NewCallback(windowProcedure),
		module:    module, icon: icon, cursor: cursor, brush: 6, name: name,
	}
	class.size = uint32(unsafe.Sizeof(class))
	registered, _, err := user32.NewProc("RegisterClassExW").Call(uintptr(unsafe.Pointer(&class)))
	if registered == 0 {
		return 0, err
	}
	window, _, err := user32.NewProc("CreateWindowExW").Call(
		0, uintptr(unsafe.Pointer(name)), uintptr(unsafe.Pointer(wideString(appName))), 0x00CF0000,
		useDefault, useDefault, 1120, 820, 0, 0, module, 0,
	)
	if window == 0 {
		return 0, err
	}
	return window, nil
}

func windowProcedure(window, message, wParam, lParam uintptr) uintptr {
	switch message {
	case 0x0005: // WM_SIZE
		if view != nil && view.GetController() != nil && wParam != 1 {
			view.Resize()
		}
	case 0x0002: // WM_DESTROY
		user32.NewProc("PostQuitMessage").Call(0)
		return 0
	}
	result, _, _ := user32.NewProc("DefWindowProcW").Call(window, message, wParam, lParam)
	return result
}

func hasHTTPSHost(address, host string) bool {
	parsed, err := url.Parse(address)
	return err == nil && parsed.Scheme == "https" && parsed.Host == host && parsed.User == nil
}

func wideString(value string) *uint16 {
	return windows.StringToUTF16Ptr(value)
}

func showError(message string) {
	user32.NewProc("MessageBoxW").Call(0, uintptr(unsafe.Pointer(wideString(message))), uintptr(unsafe.Pointer(wideString(appName))), 0x10)
}

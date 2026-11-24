#!/usr/bin/env sh
set -eu

if [ "$#" -ne 1 ]; then
  printf 'Usage: %s <output directory>\n' "$0" >&2
  exit 2
fi

platforms=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
mkdir -p "$1"
output=$(CDPATH= cd -- "$1" && pwd)
stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT
trap 'exit 1' HUP INT TERM

ios="$stage/The Snellifier for iPhone"
cp -R "$platforms/ios" "$ios"
node "$platforms/prepare-web.mjs" ios "$ios/OpeningLab/Web"
(cd "$stage" && zip -q -r The-Snellifier-iPhone-Xcode.zip "The Snellifier for iPhone")
mv "$stage/The-Snellifier-iPhone-Xcode.zip" "$output/"

node "$platforms/prepare-web.mjs" windows "$stage/Web"
cd "$platforms/windows"
for target in amd64 arm64; do
  case "$target" in
    amd64) label=x64 ;;
    arm64) label=arm64 ;;
  esac
  windows="$stage/The Snellifier for Windows ($label)"
  mkdir -p "$windows/Licenses"
  cp -R "$stage/Web" "$windows/Web"
  cp Start-here.txt "$windows/"

  GOOS=windows GOARCH="$target" CGO_ENABLED=0 go build -trimpath -ldflags="-s -w -H windowsgui" -o "$windows/The Snellifier.exe" .
  cp "$(go env GOROOT)/LICENSE" "$windows/Licenses/Go.txt"
  webview2=$(go list -m -f '{{.Dir}}' github.com/wailsapp/go-webview2)
  winloader=$(go list -m -f '{{.Dir}}' github.com/jchv/go-winloader)
  winsys=$(go list -m -f '{{.Dir}}' golang.org/x/sys)
  cp "$webview2/LICENSE" "$windows/Licenses/Go-WebView2.txt"
  cp "$webview2/webviewloader/LICENSE" "$windows/Licenses/WebView2-loader.txt"
  cp "$winloader/LICENSE.md" "$windows/Licenses/Go-winloader.txt"
  cp "$winsys/LICENSE" "$windows/Licenses/Go-x-sys.txt"

  archive="The-Snellifier-Windows-$label.zip"
  (cd "$stage" && zip -q -r "$archive" "The Snellifier for Windows ($label)")
  mv "$stage/$archive" "$output/"
done

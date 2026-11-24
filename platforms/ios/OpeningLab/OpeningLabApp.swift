import SwiftUI
import UIKit
import WebKit

@main
struct OpeningLabApp: App {
    var body: some Scene {
        WindowGroup {
            if let index = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web") {
                TrainingWebView(index: index)
                    .background(Color(red: 19 / 255, green: 27 / 255, blue: 23 / 255).ignoresSafeArea())
                    .preferredColorScheme(.dark)
            } else {
                Text("The Snellifier’s offline course files are missing.")
                    .padding()
            }
        }
    }
}

private struct TrainingWebView: UIViewRepresentable {
    let index: URL

    func makeCoordinator() -> OfflineNavigation {
        OfflineNavigation(index: index)
    }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        let store = ProgressStore(index: index)
        configuration.userContentController.add(store, name: ProgressStore.messageName)
        configuration.userContentController.addUserScript(store.bootstrap)

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        webView.uiDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = .clear
        webView.scrollView.backgroundColor = .clear
        webView.loadFileURL(index, allowingReadAccessTo: index.deletingLastPathComponent())
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {}
}

private func isTrainingPage(_ url: URL?, index: URL) -> Bool {
    guard let url, url.isFileURL else { return false }
    return url.standardizedFileURL.path == index.standardizedFileURL.path
}

private final class OfflineNavigation: NSObject, WKNavigationDelegate, WKUIDelegate {
    let index: URL

    init(index: URL) {
        self.index = index
    }

    func webView(
        _ webView: WKWebView,
        decidePolicyFor action: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        let url = action.request.url
        if isTrainingPage(url, index: index), action.targetFrame?.isMainFrame == true {
            decisionHandler(.allow)
            return
        }
        decisionHandler(.cancel)
        openReference(action)
    }

    func webView(
        _ webView: WKWebView,
        createWebViewWith configuration: WKWebViewConfiguration,
        for action: WKNavigationAction,
        windowFeatures: WKWindowFeatures
    ) -> WKWebView? {
        openReference(action)
        return nil
    }

    private func openReference(_ action: WKNavigationAction) {
        if action.navigationType == .linkActivated, let url = action.request.url,
           url.scheme == "https", url.host == "explorer.lichess.ovh", url.user == nil {
            Task { @MainActor in
                UIApplication.shared.open(url)
            }
        }
    }
}

private final class ProgressStore: NSObject, WKScriptMessageHandler {
    static let messageName = "openingLabProgress"
    private let key = "opening-lab-progress-v1"
    private let index: URL

    init(index: URL) {
        self.index = index
    }

    var bootstrap: WKUserScript {
        let snapshot = UserDefaults.standard.string(forKey: key)
        let encoded = try? JSONEncoder().encode(snapshot)
        let initial = encoded.flatMap { String(data: $0, encoding: .utf8) } ?? "null"
        let script = """
        (() => {
          let snapshot = \(initial);
          window.openingLabStorage = {
            getItem: key => key === '\(key)' ? snapshot : null,
            setItem: (key, value) => {
              if (key !== '\(key)') return;
              snapshot = value;
              window.webkit.messageHandlers.\(Self.messageName).postMessage(value);
            }
          };
        })();
        """
        return WKUserScript(source: script, injectionTime: .atDocumentStart, forMainFrameOnly: true)
    }

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == Self.messageName, message.frameInfo.isMainFrame,
              isTrainingPage(message.frameInfo.request.url, index: index),
              let snapshot = message.body as? String else { return }
        UserDefaults.standard.set(snapshot, forKey: key)
    }
}

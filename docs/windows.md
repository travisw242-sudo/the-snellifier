# Build The Snellifier for Windows

The Windows launcher bundles the trainer from `web/` and displays it using Microsoft Edge WebView2.

Install Node.js 24 or newer and Go 1.24 or later. In PowerShell, starting from the repository root, run the following.

```powershell
npm ci --prefix platforms
node platforms/prepare-web.mjs windows release/Web
Push-Location platforms/windows
go build -trimpath -ldflags="-s -w -H windowsgui" -o "../../release/The Snellifier.exe" .
Pop-Location
```

Open `release\The Snellifier.exe` and keep the `Web` folder beside it. Re-run the asset preparation command after changing files in `web/`. The launcher uses Microsoft Edge WebView2, included with Windows 11.

Edits affect your copy. Saved training progress lives in each browser or Windows profile.

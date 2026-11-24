# Build the Windows installer

The Windows app bundles the trainer from `web/` and renders it in Microsoft Edge WebView2.

Install Node.js 24 or newer, Go 1.24 or newer, and Inno Setup 6.7 or newer. From the repository root, run these commands in PowerShell.

```powershell
npm ci --prefix platforms
./platforms/windows/build-installer.ps1 -Version 1.0.0 -Architecture x64
./platforms/windows/build-installer.ps1 -Version 1.0.0 -Architecture arm64
```

The setup files are written to `release/`. Each installer adds a Start menu shortcut and an entry in Windows Installed apps. It can install for the current user without admin access.

## Release a version

Push a version tag such as `v1.0.0` to GitHub. The Windows release workflow runs the trainer tests, builds both setups, tests the x64 install and uninstall on Windows, and attaches the setups to a GitHub release.

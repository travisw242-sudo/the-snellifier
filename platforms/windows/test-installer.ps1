[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string] $Installer
)

$ErrorActionPreference = 'Stop'

$installDirectory = Join-Path $env:LOCALAPPDATA 'Programs/The Snellifier'
$shortcut = Join-Path ([Environment]::GetFolderPath('Programs')) 'The Snellifier.lnk'
$profile = Join-Path $env:LOCALAPPDATA 'Opening Lab/WebView2'
$marker = Join-Path $profile 'installer-test-progress.txt'
$flags = '/VERYSILENT', '/SUPPRESSMSGBOXES', '/NORESTART'

if (Test-Path -LiteralPath $installDirectory) {
    throw 'Run this installer test on a clean Windows runner.'
}

New-Item -ItemType Directory -Path $profile -Force | Out-Null
Set-Content -LiteralPath $marker -Value 'saved progress'
try {
    $setup = Start-Process -FilePath (Resolve-Path $Installer).Path -ArgumentList ($flags + '/SP-') -PassThru -Wait
    if ($setup.ExitCode -ne 0) { throw "Installer exited with code $($setup.ExitCode)." }

    foreach ($file in @('The Snellifier.exe', 'Web/index.html', 'Web/app.js', 'Web/pieces/wn.png', 'Licenses/Go.txt', 'unins000.exe')) {
        if (-not (Test-Path -LiteralPath (Join-Path $installDirectory $file) -PathType Leaf)) {
            throw "Installer did not copy $file."
        }
    }
    if (-not (Test-Path -LiteralPath $shortcut -PathType Leaf)) { throw 'Start menu shortcut is missing.' }

    $uninstall = Start-Process -FilePath (Join-Path $installDirectory 'unins000.exe') -ArgumentList $flags -PassThru -Wait
    if ($uninstall.ExitCode -ne 0) { throw "Uninstaller exited with code $($uninstall.ExitCode)." }
    if ((Test-Path -LiteralPath (Join-Path $installDirectory 'The Snellifier.exe')) -or (Test-Path -LiteralPath $shortcut)) {
        throw 'The uninstaller left the launcher or shortcut behind.'
    }
    if ((Get-Content -LiteralPath $marker -Raw).Trim() -ne 'saved progress') {
        throw 'The installer changed existing progress.'
    }
    Write-Host 'Verified Windows installation, Start menu shortcut, uninstall, and progress preservation.'
} finally {
    Remove-Item -LiteralPath $marker -ErrorAction SilentlyContinue
}

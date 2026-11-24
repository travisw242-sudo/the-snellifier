[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidatePattern('^\d+\.\d+\.\d+$')]
    [string] $Version,

    [ValidateSet('x64', 'arm64')]
    [string] $Architecture = 'x64',

    [string] $OutputDirectory = (Join-Path $PSScriptRoot '../../release')
)

$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '../..')).Path
$defaultCompiler = Join-Path ${env:ProgramFiles(x86)} 'Inno Setup 6/ISCC.exe'
$compiler = Get-Command ISCC.exe -ErrorAction SilentlyContinue
$compilerPath = if ($compiler) { $compiler.Source } else { $defaultCompiler }
if (-not (Test-Path -LiteralPath $compilerPath -PathType Leaf)) {
    throw 'Install Inno Setup 6.7 or newer and make ISCC.exe available on PATH.'
}

$output = (New-Item -ItemType Directory -Force -Path $OutputDirectory).FullName
$payload = (New-Item -ItemType Directory -Path (Join-Path ([System.IO.Path]::GetTempPath()) ([guid]::NewGuid()))).FullName
$previousGoOS = $env:GOOS
$previousGoArch = $env:GOARCH
$previousCgo = $env:CGO_ENABLED

try {
    & node (Join-Path $root 'platforms/prepare-web.mjs') windows (Join-Path $payload 'Web')
    if ($LASTEXITCODE -ne 0) { throw 'Could not prepare the trainer assets.' }

    Push-Location $PSScriptRoot
    try {
        $env:GOOS = 'windows'
        $env:GOARCH = if ($Architecture -eq 'x64') { 'amd64' } else { 'arm64' }
        $env:CGO_ENABLED = '0'

        & go build -trimpath -ldflags '-s -w -H windowsgui' -o (Join-Path $payload 'The Snellifier.exe') .
        if ($LASTEXITCODE -ne 0) { throw "Could not build the $Architecture launcher." }

        $goRoot = & go env GOROOT
        $webView = & go list -m -f '{{.Dir}}' github.com/wailsapp/go-webview2
        $winLoader = & go list -m -f '{{.Dir}}' github.com/jchv/go-winloader
        $winSys = & go list -m -f '{{.Dir}}' golang.org/x/sys
        $licenses = (New-Item -ItemType Directory -Path (Join-Path $payload 'Licenses')).FullName
        Copy-Item (Join-Path $goRoot 'LICENSE') (Join-Path $licenses 'Go.txt')
        Copy-Item (Join-Path $webView 'LICENSE') (Join-Path $licenses 'Go-WebView2.txt')
        Copy-Item (Join-Path $webView 'webviewloader/LICENSE') (Join-Path $licenses 'WebView2-loader.txt')
        Copy-Item (Join-Path $winLoader 'LICENSE.md') (Join-Path $licenses 'Go-winloader.txt')
        Copy-Item (Join-Path $winSys 'LICENSE') (Join-Path $licenses 'Go-x-sys.txt')
    } finally {
        Pop-Location
    }

    Copy-Item (Join-Path $PSScriptRoot 'snellifier.ico') $payload
    & $compilerPath "/DAppVersion=$Version" "/DTargetArchitecture=$Architecture" "/DPayloadDir=$payload" "/O$output" (Join-Path $PSScriptRoot 'setup.iss')
    if ($LASTEXITCODE -ne 0) { throw "Could not compile the $Architecture installer." }

    Get-Item -LiteralPath (Join-Path $output "The-Snellifier-Setup-$Architecture.exe")
} finally {
    $env:GOOS = $previousGoOS
    $env:GOARCH = $previousGoArch
    $env:CGO_ENABLED = $previousCgo
    Remove-Item -LiteralPath $payload -Recurse -Force
}

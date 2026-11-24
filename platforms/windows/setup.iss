#define AppName "The Snellifier"
#define AppExe "The Snellifier.exe"

[Setup]
AppId={{E7A09517-8E9F-41E9-A03E-91F3360EF62C}
AppName={#AppName}
AppVersion={#AppVersion}
AppPublisher=The Snellifier
AppPublisherURL=https://github.com/travisw242-sudo/the-snellifier
DefaultDirName={localappdata}\Programs\{#AppName}
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
MinVersion=10.0.22000
#if TargetArchitecture == "arm64"
ArchitecturesAllowed=arm64
ArchitecturesInstallIn64BitMode=arm64
#else
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
#endif
WizardStyle=modern
SetupIconFile=snellifier.ico
UninstallDisplayIcon={app}\snellifier.ico
OutputBaseFilename=The-Snellifier-Setup-{#TargetArchitecture}
Compression=lzma2
SolidCompression=yes
CloseApplications=yes
RestartApplications=no

[Tasks]
Name: "desktopicon"; Description: "Create a desktop shortcut"; Flags: unchecked

[Files]
Source: "{#PayloadDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{autoprograms}\{#AppName}"; Filename: "{app}\{#AppExe}"; IconFilename: "{app}\snellifier.ico"
Name: "{autodesktop}\{#AppName}"; Filename: "{app}\{#AppExe}"; IconFilename: "{app}\snellifier.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#AppExe}"; Description: "Launch The Snellifier"; Flags: nowait postinstall skipifsilent

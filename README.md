# The Snellifier for Windows

The Snellifier is an offline chess opening trainer for Windows. Study the idea behind each move, recall the line from memory, and practice the positions you tend to miss.

**[Download the Windows installer](https://github.com/travisw242-sudo/the-snellifier/releases/latest)**

## Install

1. Open the latest release and download the setup file for your PC.
2. Run the setup file and open **The Snellifier** from the Start menu.

| PC | Installer |
| --- | --- |
| Intel or AMD | `The-Snellifier-Setup-x64.exe` |
| Windows on Arm | `The-Snellifier-Setup-arm64.exe` |

The app requires Windows 11 and uses the Microsoft Edge WebView2 Runtime included with Windows 11. The installers are unsigned. Your training progress is saved in your Windows user profile.

## Train

- Learn five annotated courses, including the Italian Game, Ruy Lopez, and Hippopotamus Defense.
- Review completed lines on a spaced schedule and track first-try recall.
- Use Mixed Recall to test positions from your repertoire with the line names hidden.

## Develop

Use Node.js 24 or newer. Run `npm run dev` and open [http://127.0.0.1:8000](http://127.0.0.1:8000) to preview changes to the shared trainer. Run `npm run check` before opening a pull request.

| Path | What to edit |
| --- | --- |
| [platforms/windows/](platforms/windows/) | Windows launcher and installer |
| [web/](web/) | Trainer interface, board, and recall logic |
| [web/courses/](web/courses/) | Opening lines and move explanations |
| [web/data/](web/data/) | Variations, opening plans, and opponent replies |
| [test/](test/) | Course and recall checks |

[Build a Windows installer](docs/windows.md)

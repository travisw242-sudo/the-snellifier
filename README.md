# The Snellifier

The Snellifier helps you learn chess openings on a playable board. Study the idea behind each move, recall the line from memory, and practice the positions you tend to miss.

**[Play The Snellifier](https://opening-lab.nananaor.chatgpt.site/)**

- Learn five annotated courses, including the Italian Game, Ruy Lopez, and Hippopotamus Defense.
- Review completed lines on a spaced schedule and track first-try recall.
- Use Mixed Recall to test positions from your repertoire with the line names hidden.

The trainer runs in the browser and saves progress in that browser profile.

## Run locally

Use Node.js 24 or newer and run this command from the repository root.

```sh
npm run dev
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). Refresh the browser after saving a change.

```sh
npm test        # Validate the course data and recall rules
npm run build   # Copy the deployable site to dist/
npm run check   # Run both checks
```

## Project layout

| Path | What to edit |
| --- | --- |
| [web/](web/) | The trainer, board interaction, chess rules, and review logic |
| [web/courses/](web/courses/) | Course chapters, lines, and move explanations |
| [web/data/](web/data/) | Repertoire branches, opening plans, and opponent move samples |
| [platforms/](platforms/) | Offline Windows and iPhone wrappers |
| [test/](test/) | Checks for playable lines, course depth, and recall eligibility |

## Contribute

Create a branch for your change and open a pull request. Run `npm run check` before submitting. For a new or edited opening line, include the move sequence and explain what the player should learn from it.

The public app is served from the existing ChatGPT Sites host. GitHub checks pull requests. Publishing a release is a separate step.

## Native builds

- [Build the Windows app](docs/windows.md)
- [Open the iPhone project in Xcode](platforms/ios/README.md)

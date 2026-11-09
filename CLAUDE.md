# Project rules

Read [MAP.md](MAP.md) first. It says what every file does, so you don't need to open them all.

Keep the app organized so a beginner can read it:

- **Screens go in `src/pages/`.** A page is a whole screen the router shows.
- **Shared pieces go in `src/components/`.** These are UI parts used by pages or by other components.
- **Saving and loading goes in `src/data/`.** This covers content, generated data (`github.json`) and anything that reads or writes stored data.
- **One job per file.** If you can't describe what a file does in one sentence, split it.
- **No file over 300 lines** unless splitting it would make it harder to read (say why in a comment at the top).
- **Before writing anything, check whether it already exists.** Search the code and read MAP.md, then reuse what is there.
- When you add, move or rename a file, update MAP.md in the same commit.
- Run `npm test` and `npm run build` before committing. Both must pass.

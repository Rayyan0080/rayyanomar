# Map of the code

A guide to every file: what it does and how the pieces connect. Read this before opening files.
Rules for keeping it organized are in [CLAUDE.md](CLAUDE.md). How to use and deploy the site is in [README.md](README.md).

## What the app is

A portfolio website that looks and works like a Linux terminal. The whole site is a pretend
**directory tree** (`/experience`, `/projects`, `/courses/ITI1121/labs/lab-1`, ...). Every directory
is a page. Visitors move around by typing `cd`, `ls` and other commands, or by clicking directory names.

Built with React 19, TypeScript, Vite and React Router (`HashRouter`, so URLs look like
`rayyanomar.com/#/courses/ITI1121`). It has no backend. All content is in TypeScript files that
are bundled at build time.

## How it fits together

```text
src/data/*            content: plain objects (courses, projects, experience, ...)
      │
      ▼
src/fs/*              turns that content into a tree of FsNodes (one per directory)
      │                 and finds nodes by path (cd, ls, Tab, URLs)
      ▼
src/App.tsx           reads the URL, finds its node, picks a page:
      │                 home → Home, contact → Contact, unknown → NotFound, anything else → NodePage
      ▼
src/pages/*           whole screens, built from src/components/*
      │
src/components/Terminal.tsx wraps every page: echoed command on top, page,
                      command output, then the prompt where you type.
                      Command logic lives in src/hooks/useTerminal.ts.
```

**What happens when someone types `cd courses`:** `CommandInput` catches Enter and calls
`executeCommand` in `useTerminal`. That finds the node with `resolve()` from `fs/navigation.ts` and
calls `navigate('/courses')`. `App` then sees the new URL and renders `NodePage` for that node.

**Adding content needs no new code.** Add an entry to a data file. The `fs/` builders give it a
directory and `NodePage` renders it. A field you leave out shows as `[to be added: ...]`.

## Files

### `src/` (top level)
| File | What it does |
|---|---|
| `main.tsx` | Starts React: mounts `App` inside `HashRouter` and loads the CSS. |
| `App.tsx` | Chooses the page for the current URL and wraps it in `Terminal`. |
| `index.css` | All styling (colours, terminal layout, home-screen logo, phone layout). |

### `src/pages/`: whole screens
| File | Screen |
|---|---|
| `Home.tsx` | `/`: ASCII logo, name banner, intro, command list and top directories. |
| `Contact.tsx` | `/contact`: email, phone, GitHub and LinkedIn, with copy buttons. |
| `NodePage.tsx` | Every other directory: heading, its sections and its sub-directories. |
| `NotFound.tsx` | A URL that matches no directory. |

### `src/components/`: shared pieces
| File | What it is |
|---|---|
| `Terminal.tsx` | The frame around every page: echo line, page, output, prompt. Scrolls and focuses. |
| `CommandInput.tsx` | The typing line. Handles keys (Enter, Up/Down, Tab, Ctrl+L) and draws a block cursor. |
| `TerminalOutput.tsx` | Prints the lines that commands produce. |
| `Prompt.tsx` | The `rayyan@portfolio:~/path$` label. |
| `PageHeader.tsx` | A page title with a dashed underline. |
| `BlockView.tsx` | Draws one content block: a paragraph, a bullet list, a link list, label/value fields or a placeholder. |
| `DirListing.tsx` | A list of sub-directories as clickable `name/` with descriptions. |
| `Href.tsx` | A link. `/...` stays in the site, anything else opens a new tab. |
| `CopyButton.tsx` | The `[copy]` button. It copies to the clipboard and shows `[copied]`. |
| `ViewOnlyImage.tsx` | Shows an image (the NRC poster) view-only: drawn on a canvas, with right-click and dragging blocked, hidden when printing, and blurred when the window loses focus. |

### `src/hooks/`: React state and logic
| File | What it does |
|---|---|
| `useTerminal.ts` | The terminal's brain: runs every command (`help ls cd pwd back resume clear`), handles Tab completion and holds the output lines. |
| `useCommandHistory.ts` | Up/Down arrow recall of earlier commands. |
| `useLogoFit.ts` | On wide screens, sizes the home-page logo to match the height of the text beside it. |

### `src/fs/`: the directory tree
| File | What it does |
|---|---|
| `FsNode.ts` | The `FsNode` type (one directory: name, title, summary, path, sections, children) and `Draft` (a node before its path is set). |
| `tree.ts` | Defines the top-level directories and builds `root`, the full tree. **To add a new top-level section, edit this file.** |
| `sections.ts` | Small helpers that turn a data field into a page section, or into a placeholder when the field is missing. |
| `experienceNodes.ts` | Experience entries → directories. |
| `courseNodes.ts` | Courses → directories, with `assignments/` and `labs/` under each. |
| `projectNodes.ts` | Projects → directories, merged with GitHub data from `github.json`. |
| `navigation.ts` | `resolve` (path → node, for `cd`/`ls`/URLs), `nodeForPathname`, `displayPath` (`~/x`) and `completePath` (Tab). |

### `src/data/`: content, plus saved and loaded data
| File | What it holds |
|---|---|
| `profile.ts` | Name, title, intro paragraphs, name banner and ASCII logo. |
| `contact.ts` | Email, phone, GitHub and LinkedIn. |
| `experience.ts` | Jobs and activities. `children` makes sub-directories (e.g. hackathons). `proof` adds view-only images to the Links section (the NRC poster). |
| `certifications.ts` | Certifications. While this list is empty, `/certifications` is hidden. It appears as soon as you add one. |
| `courses/index.ts` | Combines the year files into `courses`. |
| `courses/firstYear.ts`, `secondYear.ts`, `thirdYear.ts` | Courses for that year, with their assignments and labs. |
| `courses/links.ts` | Helpers that build links into the course GitHub repositories. |
| `projects/index.ts` | Combines the category files into `projects` and re-exports `projectCategories`. |
| `projects/categories.ts` | The four project categories (each becomes `/projects/<slug>`). |
| `projects/softwareDevelopment.ts`, `personalProjects.ts`, `universityProjects.ts` | Projects in that category. |
| `github.json` | **Generated** by `npm run sync:github`: repository URLs, languages, dates and demo links. Do not edit by hand. |

### `src/types/` and `src/utils/`
| File | What it does |
|---|---|
| `types/index.ts` | Shapes of all content: `Block`, `Section`, `Experience`, `Course`, `Assignment`, `Lab`, `Project`, `RepoInfo`, `TerminalLine`, and others. |
| `utils/commands.ts` | The command list shown by `help` and on the home page. Tab completion takes its command names from here too. |
| `utils/download.ts` | Starts the résumé PDF download. |

### `tests/`: run with `npm test`
| File | What it checks |
|---|---|
| `pages.test.tsx` | Renders **every** directory in the tree, compares each one to a saved snapshot, and checks the not-found page. |
| `terminal.test.tsx` | Every command and its error messages, Tab completion and Up/Down history. |
| `components.test.tsx` | The copy button, links, clicking a directory, the view-only poster's protections, and that certifications stay hidden. |
| `render.tsx` | `renderAt(path)`: renders the whole app at a URL. |
| `setup.ts` | Stubs for browser features the test environment lacks. |
| `__snapshots__/` | The saved HTML of every page. If you change content on purpose, run `npx vitest run -u` and review the diff. |

### Project root
| File | What it does |
|---|---|
| `index.html` | The HTML shell Vite fills in. |
| `vite.config.ts` | Vite setup (React, Tailwind plugin, test settings). |
| `tsconfig.json` | TypeScript settings (strict; checks `src/` only). |
| `scripts/sync-github.mjs` | Refreshes `src/data/github.json` using the `gh` CLI. |
| `public/` | Files copied into the build as-is: `CNAME` (custom domain), `assets/Rayyan_Omar_Resume.pdf`, and `assets/nrc-poster.webp` (the NRC poster as a watermarked image; the original PDF is deliberately not in the repo). |
| `.github/workflows/deploy.yml` | Every push to `main` builds and deploys to GitHub Pages. |

## Common tasks

| I want to... | Edit |
|---|---|
| Change my intro or title | `src/data/profile.ts` |
| Add a course, assignment or lab | The right file in `src/data/courses/` |
| Add a project | Its category file in `src/data/projects/` |
| Add a job or activity | `src/data/experience.ts` |
| Add a terminal command | `src/utils/commands.ts` (help text) and the `switch` in `src/hooks/useTerminal.ts` |
| Add a top-level directory | `src/fs/tree.ts` (and a data file plus a builder in `src/fs/` if it has content) |
| Give a directory a custom page | Add a `view` value in `FsNode.ts`, a page in `src/pages/`, and a branch in `App.tsx` |
| Change colours or layout | `src/index.css` |
| Replace the résumé | `public/assets/Rayyan_Omar_Resume.pdf` |
| Show certifications again | Add entries to `src/data/certifications.ts`. Nothing else is needed |
| Add another view-only document | Convert it to an image in `public/assets/` and add it to that entry's `proof` in `experience.ts` |

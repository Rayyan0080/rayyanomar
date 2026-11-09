# Rayyan Omar — Terminal Portfolio

A keyboard-driven portfolio that works like a Linux terminal. Every section is a
directory: you explore it with `ls` and `cd`, and every directory has its own page.

Live site: <https://rayyanomar.com>

## Using the site

Type anywhere on the page; input goes to the prompt. Commands run on Enter.

| Command | What it does |
|---|---|
| `help` | List commands |
| `ls [dir]` | List a directory (the current one by default) |
| `cd <dir>` | Open a directory. Relative (`cd labs/lab-1`) and absolute (`cd /courses/ITI1121`) paths work; names are case-insensitive |
| `cd ..` | Go up one level |
| `cd /`, `cd ~`, `cd` | Go home |
| `cd -` | Return to the previous directory |
| `pwd` | Print the current directory |
| `back` | Go to the previous page in browser history |
| `resume` | Download the résumé PDF |
| `clear` | Clear output (also Ctrl+L) |

- **Tab** completes command and directory names. Press it twice to see all matches.
  With an empty prompt, Tab moves focus between links as usual.
- **Up / Down** recall earlier commands.
- Directory names on each page are links too, for touch screens.

### Directory layout

```text
/
├── experience/      nrc/, hack-the-hill/, sapna/, hackathons/<event>/
├── projects/        software-development/, engineering/, personal-projects/, university-projects/
├── courses/         <COURSE>/assignments/<assignment>/, <COURSE>/labs/<lab>/
├── certifications/
└── contact/
```

## Development

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve dist/ locally
npm test           # render every page and check every command
```

## Editing content

Content lives in typed data files in `src/data/`, separate from the navigation code:

| File | Content |
|---|---|
| `profile.ts` | Name, title, intro, ASCII logo |
| `experience.ts` | Experience entries (each becomes `/experience/<slug>`) |
| `courses/` | Courses, one file per year (`firstYear.ts`, `secondYear.ts`, `thirdYear.ts`), with their assignments and labs |
| `projects/` | `categories.ts`, plus one file of projects per category |
| `certifications.ts` | Certifications |
| `contact.ts` | Contact details |
| `github.json` | Generated GitHub metadata (see below). Do not edit by hand |

`src/fs/` turns these into the directory tree, and `src/pages/NodePage.tsx`
renders any directory, so new entries need no new components. See [MAP.md](MAP.md)
for what every file does.

**Placeholders:** a field left out of an entry shows as `[to be added: …]` on its
page. Fill it in by adding the field. Never write in a placeholder fact.

### Adding things

- **A course:** add an object with `code` and `name` to the right year file in `courses/`.
  It gets `/courses/<CODE>/`, plus `assignments/` and `labs/` directories.
- **An assignment or lab:** add it to that course's `assignments` or `labs` array.
  The `slug` becomes the directory name (e.g. `assignment-2`, `lab-3`).
- **A project:** add it to its category's file in `projects/`, with a `category`. If it has a
  public repository, set `repo` to the repository name.
- **An experience:** add it to `experience.ts`. Use `children` for sub-directories.

## GitHub project data

Repository metadata (URL, languages, dates, GitHub Pages demo URL) comes from
`src/data/github.json`. Refresh it with the GitHub CLI's existing login:

```bash
gh auth login           # once
npm run sync:github     # rewrites src/data/github.json
git diff src/data/github.json
```

Only public, non-fork repositories are written. Private repositories are skipped
entirely. The site reads the file at build time, so visitors never trigger GitHub API
requests.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages.

Custom domain setup:

- `vite.config.ts` uses `base: '/'` because the site is served from the domain root.
- `public/CNAME` contains `rayyanomar.com` and is copied into the build.
- Routing uses React Router's `HashRouter` (`rayyanomar.com/#/courses/ITI1121`), so deep
  links work on GitHub Pages without server rewrites.
- DNS: the apex `rayyanomar.com` has A records for GitHub Pages
  (185.199.108.153, .109, .110, .111); `www` is a CNAME to `rayyan0080.github.io`.
  GitHub redirects `www` and HTTP to `https://rayyanomar.com`.
- In the repository's **Settings → Pages**, the source is **GitHub Actions**, the custom
  domain is `rayyanomar.com`, and **Enforce HTTPS** is on.

### Replacing the résumé

Put the new PDF at `public/assets/Rayyan_Omar_Resume.pdf`, then commit and push.

## Tech stack

React 19, TypeScript, Vite, React Router, plain CSS (via the Tailwind v4 Vite plugin),
GitHub Actions and GitHub Pages.

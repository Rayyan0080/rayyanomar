# Rayyan Omar — Terminal Portfolio

A keyboard-driven, terminal-style personal portfolio website built with React, TypeScript, and Vite.

## 🚀 Live Site

[https://rayyan0080.github.io/rayyanomar/](https://rayyan0080.github.io/rayyanomar/)

## ⌨️ Navigation

This website is designed to be operated **entirely through keyboard input**, like a real terminal.

### Terminal Commands

Commands run when you press Enter. Typing anywhere on the page goes to the prompt, and the up/down arrow keys move through command history.

| Command | Description |
|---|---|
| `help` | Show available commands |
| `ls` | List available sections |
| `cd <section>` | Open a section (`projects`, `experience`, `certifications`, `interests`, `contact`) |
| `cd ~` | Return to the home screen |
| `back` | Go to the previous page |
| `pwd` | Show current directory |
| `clear` | Clear terminal output (also `Ctrl+L`) |
| `resume` | Download resume PDF |

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## 📝 Updating Content

All portfolio content is stored in the `src/data/` directory:

| File | Content |
|---|---|
| `profile.ts` | Name, title, intro, ASCII logo |
| `projects.ts` | Software projects |
| `experience.ts` | Work experience |
| `certifications.ts` | Certifications |
| `interests.ts` | Personal interests |
| `contact.ts` | Contact information |

Edit these files to update your portfolio. The website UI will reflect the changes automatically.

### Replacing the Resume PDF

1. Place your PDF at `public/assets/Rayyan_Omar_Resume.pdf`
2. Commit and push — the deploy workflow will update the live site.

## 🚢 Deployment

This project uses **GitHub Actions** to deploy to **GitHub Pages** automatically on every push to `main`.

### Manual Deploy

```bash
npm run build        # Build the production bundle
git add -A
git commit -m "Update site"
git push origin main # Triggers GitHub Actions
```

The workflow file is at `.github/workflows/deploy.yml`.

## 📦 Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Plain CSS** (`src/index.css`, via the Tailwind v4 Vite plugin)
- **React Router** (navigation with HashRouter)

/** Projects in /projects/personal-projects. */
import type { Project } from '../../types';

export const personalProjects: Project[] = [
  {
    slug: 'mcu-watchpath',
    name: 'Marvel Connected Universe Graph (MCU Watchpath)',
    category: 'personal-projects',
    summary: 'Interactive graph of Marvel films and shows with watch-path finder',
    repo: 'MCU.watchpath',
    year: '2026',
    overview:
      'An interactive knowledge graph of Marvel movies and TV shows, their relationships, and the minimum viewing path needed to understand any entry.',
    problem: 'Working out which earlier Marvel titles you need to watch before a given one.',
    features: [
      'Interactive node graph of 109 entries (78 movies, 31 series) across 8 Marvel universes',
      'Recursive watch paths that trace required prerequisites back to root entries',
      'Typed relationships such as Required, Sequel, Crossover and Multiverse',
      'Timeline view, full-text search, filters and spoiler-free descriptions',
      'Data validation for unique IDs, broken references and circular prerequisites',
      'Static deployment with a scheduled data-update workflow',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'React Flow', 'Zustand', 'Fuse.js', 'Vitest'],
    specs: ['React 19, TypeScript 6, Vite 8', 'Libraries: React Router 7, React Flow 11, Zustand 5, Fuse.js 7, Framer Motion, Lucide icons', 'Tests: Vitest 4 with Testing Library and jsdom', 'Linting: oxlint'],
    architecture: [
      'Typed data modules for movies, series, relationships, characters and universes',
      'Graph utilities for root detection, dependency trees and topological sorting',
      'GitHub Actions for deployment and weekly data updates',
    ],
    contributions: ['Sole contributor to the repository.'],
  },
  {
    slug: 'portfolio',
    name: 'rayyanomar.com',
    category: 'personal-projects',
    summary: 'This terminal-style portfolio',
    repo: 'rayyanomar',
    year: '2026',
    overview:
      'This website: a keyboard-driven portfolio that works like a Linux terminal, where every section is a directory you can cd into.',
    features: [
      'Virtual directory tree with cd, ls, pwd, back, history and tab completion',
      'Content kept in typed data files, separate from the navigation logic',
      'GitHub metadata synced at build time rather than requested per visit',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'GitHub Actions', 'GitHub Pages'],
    specs: ['React 19, TypeScript 5.8, Vite 6', 'Styling: Tailwind CSS 4', 'Routing: React Router 7', 'Content built at compile time from typed data files; GitHub metadata synced with the gh CLI'],
    contributions: ['Sole developer.'],
  },
  {
    slug: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    category: 'personal-projects',
    summary: 'Desktop tic-tac-toe in Java Swing',
    repo: 'tictacto',
    year: '2025',
    overview: 'A tic-tac-toe game with a Swing GUI, playable with both mouse and keyboard.',
    technologies: ['Java', 'Swing'],
    specs: ['Language: Java', 'UI: Swing', 'Single-file program'],
    contributions: ['Sole contributor to the repository.'],
  },
];

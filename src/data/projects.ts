import { Project, ProjectCategory } from '../types';

/**
 * Projects, grouped into categories. Each project appears exactly once.
 *
 * `repo` names a public repository under github.com/Rayyan0080; its URL,
 * languages, dates and GitHub Pages demo are read from github.json, which
 * `npm run sync:github` regenerates. Descriptions here come from each
 * repository's README and source, or from the résumé for projects without a
 * public repository.
 */

export const projectCategories: { slug: ProjectCategory; summary: string; description: string }[] = [
  {
    slug: 'software-development',
    summary: 'Hackathon and independent software builds',
    description: 'Software I built outside coursework, mostly at hackathons.',
  },
  {
    slug: 'engineering',
    summary: 'Engineering design and hardware projects',
    description: 'Engineering projects outside pure software. Research work at NRC is under /experience/nrc.',
  },
  {
    slug: 'personal-projects',
    summary: 'Things built for myself or my community',
    description: 'Side projects built out of personal interest.',
  },
  {
    slug: 'university-projects',
    summary: 'Course projects with public repositories',
    description: 'Course work with a public repository and, where available, a live demo. Course context is under /courses.',
  },
];

export const projects: Project[] = [
  // ------------------------------------------------- software-development
  {
    slug: 'aeroguard',
    name: 'AeroGuard (A.E.G.I.S. Garden)',
    category: 'software-development',
    summary: 'AI security operations platform - 1st place, Best Use of Snowflake',
    year: '2026',
    overview:
      'An AI-powered security operations centre (SOC) platform built at HackConcordia. It won First Place for Best Use of Snowflake.',
    problem: 'Alert fatigue: security analysts lose time triaging large volumes of low-context alerts.',
    features: [
      'Explainable, prompt-based alert generation with the Google Gemini API',
      'Incident triage decisions in under 60 seconds',
    ],
    technologies: ['FastAPI', 'Snowflake', 'MongoDB', 'Google Gemini'],
    architecture: [
      'Parallel data-ingestion flows',
      'MongoDB for application state',
      'Snowflake for telemetry analytics',
    ],
    achievements: ['First Place, Best Use of Snowflake, HackConcordia'],
    related: [{ label: 'Hackathon entry', href: '/experience/hackathons/hackconcordia' }],
  },
  {
    slug: 'chronos-cloud',
    name: 'Chronos Cloud: AI Smart City Command Center',
    category: 'software-development',
    summary: 'Digital-twin crisis management with multi-agent AI',
    repo: 'chronosccloud.tech',
    year: '2026',
    overview:
      'Project Chronos is a software-only digital twin for crisis management. It simulates, detects and responds to crisis scenarios in real time across power, airspace, transit and traffic, using an event-driven architecture and autonomous agents.',
    problem:
      'Traditional crisis-response systems are rigid, tightly coupled to hardware and slow to adapt, with little real-time data integration.',
    features: [
      'Multi-domain monitoring: power grid, airspace, OC Transpo transit and Ottawa/Ontario 511 traffic',
      'Three decision frameworks compared side by side: rules engine, single LLM and multi-agent mesh',
      'Live dashboard with an event feed and a MapLibre map of incidents and risk areas',
      'Voice announcements with ElevenLabs, falling back to the browser',
      'Human-in-the-loop verification UI that logs every AI assumption and outcome',
      'Graceful fallbacks to mock data and rules when external services are unavailable',
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'MongoDB', 'NATS / Solace PubSub+', 'Gemini', 'Cerebras', 'MapLibre GL', 'Docker'],
    specs: ['Backend agents: Python with pydantic, nats-py, pymongo, Solace PubSub+ client and Sentry SDK', 'Dashboard: Next.js 14, React 18, TypeScript 5, MapLibre GL 4', 'Infrastructure: Docker Compose with NATS 2.10, MongoDB 7.0 and mongo-express', 'Simulation source in C++ (QNX grid simulator)'],
    architecture: [
      'Event sources (crisis generator, live data adapters, flight plans) publish to a message broker (NATS locally, Solace PubSub+ in production)',
      'Python agent services (coordinator, autonomy router, risk agents) consume events',
      'AI services (Gemini, Cerebras) with a rules-engine fallback produce recovery plans',
      'MongoDB stores events; a Next.js dashboard streams updates over server-sent events',
    ],
    contributions: [
      'Team project; the repository is hosted on my account.',
      'Orchestrated an event-driven architecture of 14 APIs and 7 specialized AI agents (résumé).',
    ],
    achievements: [
      'Reduced decision-making latency for city operators by over 80%, from hours to minutes, by correlating cascading risks across transit and traffic (résumé).',
    ],
    related: [{ label: 'Hackathon entry', href: '/experience/hackathons/chronos-cloud' }],
  },
  {
    slug: 'parkingsporter',
    name: 'ParkingSporter',
    category: 'software-development',
    summary: 'Full-stack mobile app built in a 36-hour sprint',
    year: '2025',
    overview: 'A full-stack mobile application with a Java/Spring Boot backend and a React frontend, built in 36 hours.',
    features: ['REST API integrating external APIs for incident detection, with response latency under 500 ms'],
    technologies: ['Java', 'Spring Boot', 'React', 'Android Studio'],
    contributions: ['Architected the backend, integrating Spring Boot with the React frontend.'],
    related: [{ label: 'Hackathon entry', href: '/experience/hackathons/parkingsporter' }],
  },
  {
    slug: 'brainrot-short-generator',
    name: 'Brainrot Short Generator',
    category: 'software-development',
    summary: 'AI-generated vertical history videos',
    repo: 'convibecooding',
    year: '2026',
    overview:
      'Generates 9:16 vertical videos that explain a historical figure or event in Gen-Z slang, pairing an AI-written script and text-to-speech narration with gameplay footage.',
    features: [
      'Three-tier script generation: Gemini API, then a local Ollama LLM, then built-in demo scripts, so it always works',
      'Text-to-speech narration sped up 1.2x',
      'Generated gradient title images (Pillow, no ImageMagick)',
      'Split-screen 1080x1920 output: image on top, looped gameplay below',
      'Flask web interface and a command-line interface',
    ],
    technologies: ['Python', 'Flask', 'MoviePy', 'gTTS', 'Pillow', 'Google Gemini', 'Ollama'],
    specs: ['Language: Python', 'Web app: Flask 3.0 serving an HTML template', 'Video and audio: MoviePy 1.0.3, gTTS 2.5.3, Pillow 10.4', 'AI: google-generativeai 0.8.3, with a local Ollama client as an alternative', 'Config: python-dotenv (.env template)'],
    architecture: ['Topic input, script generation, TTS audio, image generation, then MoviePy compositing into an MP4'],
    contributions: ['Sole contributor to the repository.'],
  },

  // ---------------------------------------------------- personal-projects
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

  // -------------------------------------------------- university-projects
  {
    slug: 'seg3125-portfolio',
    name: 'SEG3125 Design Portfolio',
    category: 'university-projects',
    summary: 'SEG3125 Assignment 1 - terminal-themed portfolio',
    repo: 'SEG3125',
    year: '2026',
    overview:
      'The portfolio page for SEG3125, built to present the course design work and to practise visual communication and web hosting.',
    features: ['Terminal-styled introduction, interests and way of working', 'Links to each later assignment'],
    technologies: ['HTML', 'CSS', 'Bootstrap 5', 'GitHub Pages'],
    specs: ['Static site: one HTML page and one stylesheet', 'Bootstrap 5', 'Hosted on GitHub Pages'],
    contributions: ['Sole contributor to the repository.'],
    related: [{ label: 'Course assignment', href: '/courses/SEG3125/assignments/assignment-1' }],
  },
  {
    slug: 'precision-auto-repair',
    name: 'Precision Auto Repair',
    category: 'university-projects',
    summary: 'SEG3125 Assignment 2 - service business website',
    repo: 'precision_auto_repair',
    year: '2026',
    overview: 'A website for an auto repair shop, designed for SEG3125.',
    features: [
      'Services and pricing page (oil change, brake repair, tire services, diagnostics)',
      'Appointment booking form with contact details, service, date and time',
      'Booking confirmation page',
    ],
    technologies: ['React', 'Bootstrap', 'Create React App'],
    specs: ['React 19 with Create React App (react-scripts 5)', 'Bootstrap 5.3, React Router 7', 'Tests: React Testing Library', 'Deployed to GitHub Pages with gh-pages'],
    contributions: ['Sole contributor to the repository.'],
    related: [{ label: 'Course assignment', href: '/courses/SEG3125/assignments/assignment-2' }],
  },
  {
    slug: 'memory-game',
    name: 'Memory Game',
    category: 'university-projects',
    summary: 'SEG3125 Assignment 3 - sequence memory game',
    repo: 'memory_game_',
    year: '2026',
    overview: 'A sequence-memory game with a mechanic\'s-tools theme, designed for SEG3125 around how human memory works.',
    features: [
      'Difficulty levels: Beginner (3 steps), Intermediate (5) and Expert (8)',
      'Settings panel, game board and a "Diagnostic Report" results page',
    ],
    technologies: ['React', 'Vite'],
    specs: ['React 18 with Vite', 'React Router 6', 'Deployed to GitHub Pages with gh-pages'],
    contributions: ['Sole contributor to the repository.'],
    related: [{ label: 'Course assignment', href: '/courses/SEG3125/assignments/assignment-3' }],
  },
  {
    slug: 'technova',
    name: 'TechNova',
    category: 'university-projects',
    summary: 'SEG3125 Assignment 4 - electronics e-commerce site',
    repo: 'technova',
    year: '2026',
    overview: 'An electronics store designed for SEG3125, focused on faceted search and a clear checkout.',
    features: [
      'Product catalogue with filters such as category, brand, wireless, gaming and student-friendly',
      'Product details with specifications',
      'Cart managed with React context',
      'Checkout with a Cart, Shipping, Payment and Review progress stepper',
      'Post-purchase feedback survey',
    ],
    technologies: ['React', 'Vite'],
    specs: ['React 18 with Vite', 'React Router 6', 'Deployed to GitHub Pages with gh-pages'],
    contributions: ['Sole contributor to the repository.'],
    related: [{ label: 'Course assignment', href: '/courses/SEG3125/assignments/assignment-4' }],
  },
  {
    slug: 'f1-dashboard',
    name: 'F1 Dashboard',
    category: 'university-projects',
    summary: 'SEG3125 Assignment 5 - bilingual data dashboard',
    repo: 'f1-Dashboard',
    year: '2026',
    overview:
      'A Formula 1 statistics dashboard designed for SEG3125, showing driver and constructor points, wins and podiums by season.',
    features: [
      'Bar and line charts with Recharts',
      'Filters and statistics cards',
      'English and French interface with a language selector',
    ],
    technologies: ['React', 'Vite', 'Recharts'],
    specs: ['React 18 with Vite', 'Charts: Recharts 2.12', 'Routing: React Router 7', 'Deployed to GitHub Pages with gh-pages'],
    contributions: ['Sole contributor to the repository.'],
    challenges: ['The dataset is a synthetic sample built for visualization, not live race data.'],
    related: [
      { label: 'Course assignment', href: '/courses/SEG3125/assignments/assignment-5' },
    ],
  },
  {
    slug: 'otams',
    name: 'OTAMS: Online Tutoring Appointment Management System',
    category: 'university-projects',
    summary: 'SEG2105 team Android app for booking tutoring sessions',
    repo: 'project-group-7',
    year: '2025',
    overview:
      'A team-built Android app (Group 7, SEG2105) that gives students, tutors and administrators one platform for tutoring sessions. Built over four deliverables with a team of four.',
    problem: 'Tutoring sessions were hard to manage: students need to find and book tutors, tutors need to publish availability, and someone has to vet who joins.',
    features: [
      'Students search tutors by course, book sessions, cancel up to 24 hours before, and rate tutors',
      'Tutors create availability in 30-minute slots with overlap prevention, and manage their sessions',
      'Administrators approve or reject registrations from an inbox; login is gated on approval status',
      'Role-based registration and login for students, tutors and administrators',
    ],
    technologies: ['Java', 'Android', 'Firebase Authentication', 'Cloud Firestore', 'RecyclerView', 'Espresso'],
    specs: ['Platform: Android, written in Java 11', 'Build: Gradle (Kotlin DSL), minSdk 24, targetSdk 36, Google Services plugin', 'Backend: Firebase Authentication and Cloud Firestore', 'UI: AndroidX AppCompat, Material, ConstraintLayout, RecyclerView', 'Tests: JUnit and Espresso'],
    architecture: [
      'Activity-based navigation with RecyclerView lists and custom adapters',
      'Backend layer of use cases (login, logout, register student/tutor) behind an AuthService and an AuthRepository interface',
      'Firestore holds users, approval status, availability and sessions',
    ],
    contributions: [
      'Backend infrastructure: account creation logic, Firestore schema design and the user status model',
      'Administrator backend: approval workflow, status gating at login and Firestore query optimization',
      'Merged the final deliverable and submitted the final report',
    ],
    challenges: [
      'Merge conflicts on a shared main branch, once wiping the codebase; fixed with feature branches, pull-before-push and pull request reviews',
      'Firebase setup issues (misplaced google-services.json, permissive security rules hiding bugs); fixed by documenting setup and tightening rules feature by feature',
      'Navigation running before Firestore queries finished; fixed with proper callbacks and loading states',
      'Time-slot overlap checks flagging adjacent slots; fixed by storing times as epoch milliseconds with clear boundary rules',
    ],
    related: [{ label: 'SEG2105 course', href: '/courses/SEG2105' }],
  },
  {
    slug: 'simplechat',
    name: 'simpleChat',
    category: 'university-projects',
    summary: 'SEG2105 client-server chat assignment',
    repo: 'simpleChat',
    year: '2025',
    overview: 'A Java client-server chat application extended from the SEG2105 course base code.',
    features: ['Login IDs required to connect', 'Server and client consoles', 'Recorded test-suite run'],
    technologies: ['Java'],
    specs: ['Language: Java', 'Built on the OCSF client-server framework', 'TCP sockets, default port 5555', 'Entry points: ClientConsole and ServerConsole'],
    contributions: ['Implemented the assignment exercises on top of the provided base code and ran the course test suite.'],
    related: [{ label: 'Course assignment', href: '/courses/SEG2105/assignments/simplechat' }],
  },
];

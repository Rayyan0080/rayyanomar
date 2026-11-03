import { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'AeroGuard (A.E.G.I.S. Garden)',
    year: '2026',
    description:
      'AI-powered security operations (SOC) platform. First Place, Best Use of Snowflake at HackConcordia.',
    highlights: [
      'Cut incident triage decision time to under 60 seconds with Google Gemini prompt-based, explainable alerts.',
      'Parallel ingestion flows using MongoDB for state management and Snowflake for telemetry analytics.',
    ],
    technologies: ['FastAPI', 'Snowflake', 'MongoDB', 'Google Gemini'],
  },
  {
    name: 'Chronos Cloud: AI Smart City Command Center',
    year: '2026',
    description:
      'Real-time command center built on an event-driven architecture with 14 APIs and 7 specialized AI agents.',
    highlights: [
      'Reduced decision-making latency for city operators by over 80% by correlating cascading transit and traffic risks.',
      'Human-in-the-loop verification UI that logs every AI assumption and telemetry-verified outcome.',
    ],
    technologies: ['FastAPI', 'Python', 'Event-Driven Architecture', 'Multi-Agent Systems'],
  },
  {
    name: 'ParkingSporter',
    year: '2025',
    description:
      'Full-stack mobile application with a Java/Spring Boot backend and React frontend, built in a 36-hour sprint.',
    highlights: [
      'REST API with <500ms response latency, integrating external APIs for incident detection.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Android Studio'],
  },
  {
    name: 'F1 Dashboard',
    description: 'Interactive Formula 1 dashboard for viewing race data, standings, and statistics.',
    technologies: ['React', 'TypeScript', 'API Integration', 'Data Visualization'],
    github: 'https://github.com/Rayyan0080/f1-Dashboard',
  },
  {
    name: 'TechNova',
    description: 'Technology-focused web application showcasing modern development practices and UI/UX design.',
    technologies: ['React', 'JavaScript'],
    github: 'https://github.com/Rayyan0080/technova',
  },
  {
    name: 'Beacon Hill Musallah',
    description: 'Community website providing information and resources for the Beacon Hill Musallah.',
    technologies: ['Web Development', 'Full-Stack'],
    github: 'https://github.com/Rayyan0080/beacon_hill_musallah',
  },
  {
    name: 'MCU Watchpath',
    description: 'Application for tracking and planning viewing paths through the Marvel Cinematic Universe.',
    technologies: ['React', 'JavaScript'],
    github: 'https://github.com/Rayyan0080/MCU.watchpath',
  },
];

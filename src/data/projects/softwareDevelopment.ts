/** Projects in /projects/software-development. */
import type { Project } from '../../types';

export const softwareDevelopment: Project[] = [
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
    summary: 'Parking-violation reporting app for 3-1-1, built in 36 hours',
    year: '2025',
    overview:
      'A full-stack mobile app that lets residents report parking violations to the city\'s 3-1-1 service. It has a Java/Spring Boot backend and a React frontend, and was built by a team in a 36-hour sprint at uOttaHack 7 (January 2025).',
    problem:
      'Reporting a parking violation is slow for residents, and every report costs 3-1-1 staff time and a vehicle trip. ParkingSporter lets a verified resident file a photo report that AI validates before a 3-1-1 worker reviews it, so tickets can be issued without the wasted time and travel.',
    features: [
      'User verification: an ID and a selfie are required to activate an account',
      'Violation reporting: photos of the violating car and its plates; offline mode stores reports until connectivity is restored',
      'AI validation: GROQ AI extracts the license plate from the photos',
      'Database management: MariaDB holds the reports for 3-1-1 workers',
      'Efficient processing: reviewed reports lead to ticket issuance',
      'REST API integrating external APIs for incident detection, with response latency under 500 ms',
    ],
    technologies: ['GROQ AI', 'MariaDB 11.6.2', 'Spring Boot 3.4.1', 'ngrok', 'Java', 'React', 'Android Studio'],
    architecture: [
      'Mobile app (React frontend): residents verify their account with an ID and a selfie, then photograph the violating car and its plates',
      'Reports made offline are stored on the device and sent once connectivity is restored',
      'Java/Spring Boot backend exposes the REST API, reached by the app through an ngrok tunnel',
      'GROQ AI extracts the license plate from each report to validate it',
      'MariaDB stores the reports for 3-1-1 workers; a reviewed report leads to a ticket being issued',
    ],
    contributions: [
      'Participant in a team project.',
      'Architected the backend, integrating Spring Boot with the React frontend.',
    ],
    achievements: ['Built at uOttaHack 7 (January 2025)'],
    sections: [
      {
        heading: 'Benefits',
        body: [
          {
            fields: [
              ['Residents', '50% time savings and easy access to violation history'],
              ['311 services', 'Saves 2 hours per report and reduces vehicle reliance'],
              ['City', '$2 million annual savings from operational efficiency, and reduced carbon emissions'],
            ],
          },
        ],
      },
      {
        heading: 'README',
        body: [
          'Driving Spotter is the backend for the Driving Spotter mobile app, created for uOttaHack 7. It is written using:',
          { list: ['Spring Boot 3.4.1', 'MariaDB 11.6.2'] },
        ],
      },
    ],
    related: [
      { label: 'Backend repository (Driving Spotter)', href: 'https://github.com/zahinabrer5/driving-spotter-backend' },
      { label: 'DoraHacks submission', href: 'https://dorahacks.io/buidl/21593' },
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_uottahack-hackathon-learning-ugcPost-7287198124236759041-XxQ0/' },
    ],
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
];

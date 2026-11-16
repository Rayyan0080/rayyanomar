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
      'A real-time security operations centre (SOC) platform that ranks incoming security alerts and explains every decision. A team of four built it in 24 hours at HackConcordia, where it won First Place for Best Use of Snowflake.',
    problem:
      'Alert fatigue. During a cyberattack hundreds of alerts fire at once and every minute costs data, but analysts cannot tell which alert matters most. Teams fail from information overload, not from a lack of data.',
    features: [
      'AI incident triage: a ranked priority queue, with a decision in under 60 seconds',
      'Transparent AI: analysts can see why each decision was made',
      'Live updates over WebSockets',
      'Interactive map of incidents around Ottawa',
      'ElevenLabs voice alerts for critical incidents',
      'Full audit trail for accountability',
    ],
    technologies: ['FastAPI', 'React', 'Snowflake', 'MongoDB', 'Google Gemini', 'OpenRouter', 'WebSockets', 'ElevenLabs'],
    architecture: [
      'FastAPI backend with a React dashboard',
      'Parallel design: MongoDB holds the real-time state while Snowflake runs analytics independently',
      'Google Gemini, called through OpenRouter, produces the ranked and explained triage',
      'ElevenLabs turns critical incidents into voice alerts',
    ],
    contributions: [
      'Worked on the FastAPI backend: the endpoints for incidents, triage and decisions, and the services behind them.',
      'Set up the multi-agent AI pipeline: a triage agent analyses the incoming signals, a second critique agent reviews its result, and the output is checked against a strict JSON schema, with a repair-and-retry step when it does not match.',
      'Built the orchestration that routes each task to the right model: Google Gemini for input that includes images, and models reached through OpenRouter for text reasoning, explanations and voice summaries.',
      'Added a consensus check for high-risk actions: two independent models must agree, each with at least 70% confidence, or the system asks for more review instead of acting.',
      'Made the AI API calls reliable with timeouts, retries and clear error messages, plus a safe fallback that asks for manual review when the AI services are unavailable.',
      'Team of four: Rayyan Omar, Yahya E, Gautam Khosla and Adam Jemmali.',
    ],
    challenges: [
      'Making real-time data and heavy AI processing work together without lag; solved by letting MongoDB handle real-time state and Snowflake handle analytics, each on its own.',
    ],
    achievements: ['First Place, Best Use of Snowflake API (Major League Hacking), HackConcordia', 'Competed in the D3 Security challenge'],
    related: [
      { label: 'Hackathon entry', href: '/experience/hackathons/hackconcordia' },
      { label: 'Demo video', href: 'https://youtu.be/v50brOXF6v4' },
      { label: 'GitHub repository', href: 'https://github.com/GautamTalksDev/aeroguard-tech' },
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_majorleaguehacking-concordiauniversity-hackconcordia-ugcPost-7425590994278002688-bY4x/' },
    ],
  },
  {
    slug: 'chronos-cloud',
    name: 'Chronos Cloud: AI Smart City Command Center',
    category: 'software-development',
    summary: 'Digital-twin crisis management with multi-agent AI',
    repo: 'chronoscloud.tech',
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
    specs: ['Backend agents: Python with pydantic, nats-py, pymongo, Solace PubSub+ client and Sentry SDK', 'Dashboard: Next.js, React, TypeScript, MapLibre GL', 'Infrastructure: Docker Compose with NATS, MongoDB and mongo-express', 'Simulation source in C++ (QNX grid simulator)'],
    architecture: [
      'Event sources (crisis generator, live data adapters, flight plans) publish to a message broker (NATS locally, Solace PubSub+ in production)',
      'Python agent services (coordinator, autonomy router, risk agents) consume events',
      'AI services (Gemini, Cerebras) with a rules-engine fallback produce recovery plans',
      'MongoDB stores events; a Next.js dashboard streams updates over server-sent events',
    ],
    contributions: [
      'Team project; the repository is hosted on my account.',
      'Orchestrated an event-driven architecture of 14 APIs and 7 specialized AI agents.',
    ],
    achievements: [
      'Reduced decision-making latency for city operators by over 80%, from hours to minutes, by correlating cascading risks across transit and traffic.',
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
    technologies: ['GROQ AI', 'MariaDB', 'Spring Boot', 'ngrok', 'Java', 'React', 'Android Studio'],
    architecture: [
      'Mobile app (React frontend): residents verify their account with an ID and a selfie, then photograph the violating car and its plates',
      'Reports made offline are stored on the device and sent once connectivity is restored',
      'Spring Boot REST API in three layers: controllers, services and Spring Data JPA repositories',
      'Two resources, users and reports, each with list, get, create, update and delete endpoints under /api/v1',
      'A report holds the violation description, location, time, an evidence photo and a licence-plate photo; each report belongs to a user',
      'When a report arrives, the backend sends the plate photo to a vision model on Groq, which returns the plate text; the report is saved only if the plate has a valid format, otherwise the API answers 400',
      'Every response uses one JSON envelope: timestamp, status code, message and data',
      'MariaDB stores users and reports, with tables generated from the Java entities; the app reaches the API through an ngrok tunnel',
    ],
    contributions: [
      'Worked on the Java/Spring Boot backend: the REST API for users and reports, the data model and the database layer.',
      'Connected the backend to Groq so a licence plate is read from the photo and checked before a report is saved.',
      'Integrated the backend with the React mobile app, tested end to end through an ngrok tunnel.',
    ],
    sections: [
      {
        heading: 'Benefits',
        body: [
          {
            fields: [
              ['Residents', '50% time savings and easy access to violation history'],
              ['3-1-1 services', 'Saves 2 hours per report and reduces vehicle reliance'],
              ['City', '$2 million annual savings from operational efficiency, and reduced carbon emissions'],
            ],
          },
        ],
      },
    ],
    related: [
      { label: 'Backend repository', href: 'https://github.com/zahinabrer5/driving-spotter-backend' },
      { label: 'DoraHacks submission', href: 'https://dorahacks.io/buidl/21593' },
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_uottahack-hackathon-learning-ugcPost-7287198124236759041-XxQ0/' },
    ],
  },
  {
    slug: 'brainrot-short-generator',
    name: 'Brainrot Short Generator',
    category: 'software-development',
    summary: 'AI-generated vertical history videos',
    repo: 'convibecoding',
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
    specs: ['Language: Python', 'Web app: Flask serving an HTML template', 'Video and audio: MoviePy, gTTS, Pillow', 'AI: google-generativeai, with a local Ollama client as an alternative', 'Config: python-dotenv (.env template)'],
    architecture: ['Topic input, script generation, TTS audio, image generation, then MoviePy compositing into an MP4'],
    contributions: ['Sole contributor to the repository.'],
  },
];

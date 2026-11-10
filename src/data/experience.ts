import { Experience } from '../types';

/**
 * Sources: résumé (public/assets/Rayyan_Omar_Resume.pdf) and the activity list
 * Rayyan supplied for NRC. Leave a field out when it is not known; the page
 * then shows a "not provided yet" placeholder for it.
 */
export const experience: Experience[] = [
  {
    slug: 'nrc',
    summary: 'Materials Research Student (Co-op), NRC Aerospace',
    organization: 'National Research Council Canada (NRC) - Aerospace Research Centre',
    organizationDescription:
      "The NRC is the Government of Canada's research and technology organization. Its Aerospace Research Centre carries out research and testing for the aerospace sector.",
    role: 'Materials Research Student (Co-op)',
    dates: 'Sep 2023 - Jun 2024',
    location: 'Ottawa, ON',
    responsibilities: [
      'Validated high-temperature material resistance for over 100 aerospace samples by designing and executing testing protocols within strict safety parameters.',
      'Plasma torch testing of material samples.',
      'Oxyacetylene torch testing of material samples.',
      'Microscopy and material damage analysis of tested samples.',
      'Laser scanning of samples and 3D modelling of their surfaces.',
      'Research and data collection for the testing programme.',
      'Technical documentation, reports and presentations.',
    ],
    skills: [
      'High-temperature materials testing',
      'Laboratory safety procedures',
      'Optical microscopy and imaging workflows',
      'Laser scanning and 3D depth mapping',
      'Data collection and analysis',
      'Technical writing and presenting',
    ],
    contributions: [
      'Authored a 25-page technical safety manual that standardized testing operations and was adopted by all subsequent researchers in the facility.',
      'Built high-resolution 3D depth-map and microscopic imaging workflows for degradation analysis.',
    ],
    achievements: [
      'Improved material degradation analysis accuracy by 30% with the 3D depth-map and microscopy workflows.',
    ],
    proof: [
      {
        src: 'assets/nrc-poster.webp',
        alt: 'Research poster: Ultra-High Temperature Ceramics, Atmospheric Plasma and Oxyacetylene Torch Testing, by Rayyan Omar, Millicent Nedd, Xingbo Huang and Ali Merati, NRC',
        caption: 'Research poster: Ultra-High Temperature Ceramics - Atmospheric Plasma and Oxyacetylene Torch Testing (view only)',
      },
    ],
  },
  {
    slug: 'hack-the-hill',
    summary: 'Co-VP of Logistics, Hack the Hill hackathon',
    organization: 'Hack the Hill',
    organizationDescription: 'A 36-hour student hackathon held in Ottawa.',
    role: 'Co-VP of Logistics',
    dates: '2026',
    location: 'Ottawa, ON',
    responsibilities: [
      'Directed end-to-end event operations for 900+ participants: check-ins, ticketing pipelines and real-time problem solving.',
      'Organized and managed Full-Stack Development and AI/ML workshop panels for an audience of 500+ attendees.',
      'Negotiated and managed catering for 900+ attendees across the 36-hour event.',
      'Secured centralized overnight accommodation for the organizing team.',
    ],
    skills: ['Event operations', 'Logistics planning', 'Vendor negotiation', 'Team coordination', 'Problem solving under time pressure'],
    links: [{ label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_hackthehill-hackathon-mlh-ugcPost-7512975330475876352-EsY0/' }],
    sections: [
      {
        heading: 'Hack the Hill III recap',
        body: [
          'Hack the Hill III is officially a wrap, and what a weekend it was! 🎉',
          'I spent months planning with an amazing team, and then 3 days of making it all happen on the ground. I stayed up through all three days to keep things running, from collecting and organizing food for hackers to solving problems the moment they came up.',
          'A few highlights:',
          {
            list: [
              "💻 Led the Full-Stack Development and AI/ML workshop, sharing what I've learned building projects with FastAPI, React, and AI agents",
              '🚀 Took part in the MLH Devpost workshop to help hackers get their projects submitted and presented',
              '⚖️ Had the chance to judge at the hackathon and see the incredible things people built in just a weekend',
              '🍜 Helped coordinate events across the weekend, including our Spicy Ramen Challenge (yes, it got intense)',
            ],
          },
          'Between the planning, the late nights, and the last-minute fixes, the best part was watching everything come together and seeing hackers build, learn, and have fun.',
          "Huge thank you to the directors, my logistics teammates, the volunteers, our sponsors, and MLH for making this possible. I'm grateful to have been part of such a great team, and I can't wait to see what's next.",
        ],
      },
    ],
  },
  {
    slug: 'sapna',
    summary: 'Sapna (details to be added)',
    organization: 'Sapna',
  },
  {
    slug: 'hackathons',
    summary: 'Hackathon participation and organizing',
    organization: 'Hackathons',
    organizationDescription:
      'Hackathons I have competed in or helped organize. Each project has its own page under /projects.',
    children: [
      {
        slug: 'hackconcordia',
        summary: 'AeroGuard - First Place, Best Use of Snowflake',
        organization: 'HackConcordia',
        role: 'Participant (team)',
        dates: '2026',
        contributions: [
          'Built AeroGuard (A.E.G.I.S. Garden), an AI-powered security operations (SOC) platform.',
        ],
        achievements: ['First Place, Best Use of Snowflake.'],
        skills: ['FastAPI', 'Snowflake', 'MongoDB', 'Google Gemini'],
        links: [
          { label: 'AeroGuard project page', href: '/projects/software-development/aeroguard' },
          { label: 'Demo video', href: 'https://youtu.be/v50brOXF6v4' },
          { label: 'GitHub', href: 'https://github.com/GautamTalksDev/aeroguard-tech' },
          { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_majorleaguehacking-concordiauniversity-hackconcordia-ugcPost-7425590994278002688-bY4x/' },
        ],
        sections: [
          {
            heading: 'We won First Place at HackConcordia for Best Use of Snowflake ❄️🏆',
            body: [
              "I am proud to share that my team and I won the Best Use of Snowflake API award at this year's HackConcordia!",
              'We built AeroGuard (A.E.G.I.S. Garden), a next-gen SOC decision platform designed to eliminate alert fatigue. By leveraging Snowflake for analytics and MongoDB for real-time state, we created a system that turns raw chaos into auditable, explainable decisions in under 60 seconds.',
              'Technological highlights:',
              {
                fields: [
                  ['Analytics', 'Snowflake (the backbone of our data strategy)'],
                  ['Real-time state', 'MongoDB (for high-speed updates)'],
                  ['AI engine', 'Google Gemini via OpenRouter (for ranked, explainable triage)'],
                  ['Backend', 'FastAPI'],
                  ['Alerting', 'ElevenLabs (voice synthesis for critical threats)'],
                ],
              },
              'The biggest challenge was orchestrating real-time data flows with heavy AI processing without latency. Our solution? A parallel architecture that lets each tool do what it does best.',
              'Thank you to my teammates Yahya E, Gautam Khosla, and Adam Jemmali for the incredible effort, and to Major League Hacking and Concordia University for a great event.',
            ],
          },
        ],
      },
      {
        slug: 'chronos-cloud',
        summary: 'Chronos Cloud - AI smart city command center',
        organization: 'Chronos Cloud (hackathon project)',
        role: 'Participant (team)',
        dates: '2026',
        contributions: [
          'Team project: a real-time command center built on an event-driven architecture with 14 APIs and 7 specialized AI agents.',
        ],
        skills: ['Python', 'FastAPI', 'Event-driven architecture', 'Multi-agent systems'],
        links: [
          { label: 'Chronos Cloud project page', href: '/projects/software-development/chronos-cloud' },
          { label: 'Devpost', href: 'https://devpost.com/software/chronoscloud-tech' },
          { label: 'GitHub', href: 'https://github.com/Rayyan0080/chronosccloud.tech' },
          { label: 'Demo video', href: 'https://youtu.be/oAnwRMJ8bpg' },
          { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_chronos-cloud-share-7420686774005571584-J34T/' },
        ],
        sections: [
          {
            heading: 'Chronos Cloud: a real-time AI command center for smart cities',
            body: [
              'What happens when city systems fail, and every second counts?',
              'At uOttaHack 8, my team (Adam J., Gautam Khosla, Abdullah Zubair, and I) built Chronos Cloud: a real-time, AI-powered command center designed to help cities respond to critical infrastructure incidents with speed, clarity, and accountability.',
            ],
          },
          {
            heading: '🚨 The problem: decisions under extreme pressure',
            body: [
              'Modern cities generate massive volumes of real-time data, yet during transit failures, traffic gridlock, or infrastructure degradation, operators often face:',
              {
                list: [
                  'Information overload across disconnected systems',
                  'Conflicting signals with no unified operational view',
                  "Automated recommendations they can't fully trust",
                  'Decisions that must be made in minutes, not hours',
                ],
              },
              'Chronos is built to support human operators, not replace them.',
            ],
          },
          {
            heading: '⚙️ How it works: 14 APIs, 7 AI agents, 1 mission',
            body: [
              'Chronos uses an event-driven architecture that:',
              {
                list: [
                  'Ingests live city, transit, and infrastructure data',
                  'Correlates signals across domains to detect cascading risks',
                  'Generates structured response options with confidence scores',
                  'Exposes assumptions, uncertainties, and trade-offs',
                  'Requires explicit human approval before any action',
                  'Verifies outcomes using live telemetry',
                  'Records the full decision chain for accountability',
                ],
              },
              'The platform was built for the Ottawa region, featuring a live map interface showing real-time incidents, risks, and system status.',
            ],
          },
          { heading: '🧠 Built on responsibility, not hype', body: ['Chronos is non-autonomous, non-kinetic, and human-centered by design.'] },
          {
            heading: '🌍 Why this matters',
            body: [
              'This is what trustworthy AI infrastructure should look like for smart cities, emergency response, and civil resilience, where reliability, transparency, and human judgment matter as much as speed.',
              'Huge thanks to the uOttaHack mentors, organizers, judges, and sponsors for making this possible.',
            ],
          },
        ],
      },
      {
        slug: 'parkingsporter',
        summary: 'ParkingSporter - 36-hour build',
        organization: 'ParkingSporter (hackathon project)',
        role: 'Participant (team)',
        dates: '2025',
        contributions: ['Built the Java/Spring Boot backend of a full-stack mobile app with a React frontend in a 36-hour sprint.'],
        skills: ['Java', 'Spring Boot', 'React', 'Android Studio'],
        links: [
          { label: 'ParkingSporter project page', href: '/projects/software-development/parkingsporter' },
          { label: 'Backend repository (Driving Spotter)', href: 'https://github.com/zahinabrer5/driving-spotter-backend' },
          { label: 'DoraHacks submission', href: 'https://dorahacks.io/buidl/21593' },
          { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/rayyanomar_uottahack-hackathon-learning-ugcPost-7287198124236759041-XxQ0/' },
        ],
        sections: [
          { heading: 'Event', body: ['uOttaHack 7 (January 2025)'] },
          {
            heading: 'README',
            body: [
              'Driving Spotter is the backend for the Driving Spotter mobile app, created for uOttaHack 7. It is written using:',
              { list: ['Spring Boot 3.4.1', 'MariaDB 11.6.2'] },
            ],
          },
        ],
      },
      {
        slug: 'hack-the-hill',
        summary: 'Organizer - Co-VP of Logistics',
        organization: 'Hack the Hill',
        role: 'Organizer (Co-VP of Logistics)',
        dates: '2026',
        links: [{ label: 'Full Hack the Hill entry', href: '/experience/hack-the-hill' }],
      },
    ],
  },
];

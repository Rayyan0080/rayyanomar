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
    achievements: ['Reduced entry queue times through the check-in and ticketing process.'],
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
        links: [{ label: 'AeroGuard project page', href: '/projects/software-development/aeroguard' }],
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
        links: [{ label: 'Chronos Cloud project page', href: '/projects/software-development/chronos-cloud' }],
        sections: [{ heading: 'Event', body: [{ todo: 'Name of the hackathon where Chronos Cloud was built' }] }],
      },
      {
        slug: 'parkingsporter',
        summary: 'ParkingSporter - 36-hour build',
        organization: 'ParkingSporter (hackathon project)',
        role: 'Participant (team)',
        dates: '2025',
        contributions: ['Built the Java/Spring Boot backend of a full-stack mobile app with a React frontend in a 36-hour sprint.'],
        skills: ['Java', 'Spring Boot', 'React', 'Android Studio'],
        links: [{ label: 'ParkingSporter project page', href: '/projects/software-development/parkingsporter' }],
        sections: [{ heading: 'Event', body: [{ todo: 'Name of the hackathon where ParkingSporter was built' }] }],
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

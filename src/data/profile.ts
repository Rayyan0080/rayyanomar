export const profile = {
  name: 'Rayyan Omar',
  handle: 'RayyanOmar.exe',
  /** Block-letter rendering of `handle`, shown as the home screen title. */
  handleBanner: [
    '█▀█ ▄▀█ █▄█ █▄█ ▄▀█ █▄░█ █▀█ █▀▄▀█ ▄▀█ █▀█  █▀▀ ▀▄▀ █▀▀',
    '█▀▄ █▀█ ░█░ ░█░ █▀█ █░▀█ █▄█ █░▀░█ █▀█ █▀▄  ██▄ █░█ ██▄',
  ].join('\n'),
  title: 'Software Engineer | AI/Cloud/Cybersecurity Enthusiast | Open Source Contributor',
  /** One string per paragraph; each wraps naturally to the available width. */
  intro: [
    'I am a Software Engineering (CO-OP) student at the University of Ottawa. My technical foundation includes Python, Java, TypeScript, SQL, FastAPI, Spring Boot, React, Docker, CI/CD, and MongoDB.',
    'I specialize in building scalable, event-driven architectures and multi-agent AI systems, highlighted by developing AeroGuard, an AI-powered Security Operations Center that won First Place for Best Use of Snowflake at HackConcordia, and Chronos Cloud, a real-time smart city command center orchestrating 14 APIs and 7 specialized AI agents.',
    'Beyond hackathons, I configure self-hosted Linux server infrastructure, deploying offline LLMs and managing secure remote networking pipelines.',
    'In leadership and professional roles, I serve as Chair of the Board of Directors at Capital Technologies, directed operations for over 900 participants as Co-VP of Logistics for the Hack the Hill Hackathon, and authored standardized technical safety protocols during a materials engineering co-op at the National Research Council.',
  ],
};

/**
 * Monospaced logo for the home screen: a Fedora-style speech-bubble silhouette
 * (a circle with a squared-off lower-left corner) filled with 'c', with a
 * script R and its lower-left drop shadow (';') set inside it. Generated from
 * the brush-script R reference by sampling the letter onto a 44x22 character
 * grid. Letter characters are drawn brighter (see LOGO_LETTER); the logo is
 * monochrome.
 */
const LOGO_ROWS = [
  "             ..::::rrrrrr::::..",
  "          .:cccccccccccccccccccc:.",
  "       .:cccccccccccccccccccccccccc:.",
  "     .:cccccccxNNMNNNNNNNMNxccccccccc:.",
  "    :cccccxNMMMNccccccccc;NMMxccccccccc:",
  "  .:ccccxMMMNccccccxcccccc;MMMcccccccccc:.",
  " .cccccxMMMcccccccMMMcccccMMMMcccccccccccc.",
  " :cccccNMMccccccNMMMNcccNMMMMccccccccccccc:",
  ".cccccc;MMcccccMMMMNxNMMMMNcccccccccccccccc.",
  ":ccccccc;xxccNMMMMMMMMNxccccccccccccccccccc:",
  "ccccccccccccMMMMxMMNcccccccccccccccccccccccc",
  "ccccccccccxMMMNcc;NMMccccccccccccccccccccccc",
  "ccccccccc;MMMccccc;NMMxcccccccccccccccccccc:",
  "ccccccccc;MMccccccc;xMMMccccccccccccccccccc.",
  "cccccccccc;xcccccccccxMMMxcccccccccccccccc:",
  "cccccccccccccccccccccc;MMMMccccccccccccccc.",
  "ccccccccccccccccccccccc;xMMMMxcccccccMcc:.",
  "ccccccccccccccccccccccccc;NMMMMMNNNNMNc:",
  "ccccccccccccccccccccccccccc;NMMMMMMMx:.",
  "cccccccccccccccccccccccccccccc;xxxc:.",
  "cccccccccccccccccccccccccccccccc:.",
  "ccccccccccccccccccccccccc::::..",
];

/** Characters that belong to the R (everything else is the bubble). */
export const LOGO_LETTER = /[^c.:;,' ]/;

const LOGO_WIDTH = Math.max(...LOGO_ROWS.map(r => r.length));
export const asciiLogoRows = LOGO_ROWS.map(r => r.padEnd(LOGO_WIDTH));

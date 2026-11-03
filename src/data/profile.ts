export const profile = {
  name: 'Rayyan Omar',
  handle: 'RayyanOmar.exe',
  /** Block-letter rendering of `handle`, shown as the home screen title. */
  handleBanner: [
    '█▀█ ▄▀█ █▄█ █▄█ ▄▀█ █▄░█ █▀█ █▀▄▀█ ▄▀█ █▀█  █▀▀ ▀▄▀ █▀▀',
    '█▀▄ █▀█ ░█░ ░█░ █▀█ █░▀█ █▄█ █░▀░█ █▀█ █▀▄  ██▄ █░█ ██▄',
  ].join('\n'),
  title: 'Software Engineering Student',
  intro: [
    'BASc Software Engineering (Co-op) at the University of Ottawa.',
    'I build full-stack and AI-driven systems with FastAPI, React, Spring Boot and multi-agent workflows.',
  ],
};

/**
 * Monospaced logo for the home screen, in the style of the Fedora neofetch
 * logo: a rounded bubble of 'c' characters with the letter R cut out of it.
 * Letter characters are drawn in a second colour (see LOGO_LETTER).
 */
const LOGO_ROWS = [
  "           ...::::::::::...",
  "       ..:::cccccccccccccc:::..",
  "     .::cccccccccccccccccccccc::.",
  "   ..:cccccccccccccccccccccccccc:..",
  "  .:cccccc;MMMMMMMMMWKOd:.cccccccc:.",
  " .:ccccccc;MMMMMMMMMMMMMMk.cccccccc:.",
  ".:cccccccc;MMM;cccccc;dMMMxccccccccc:.",
  ".:cccccccc;MMM;ccccccc;WMMWccccccccc:.",
  ":ccccccccc;MMM;cccccc;dMMMxcccccccccc:",
  ":ccccccccc;MMMMMMMMMMMMMWk.cccccccccc:",
  ":ccccccccc;MMMMMMMMMMMNk;cccccccccccc:",
  ":ccccccccc;MMM;cc;OMMWoccccccccccccc:.",
  ":ccccccccc;MMM;cccc;KMMK;ccccccccccc:.",
  ":ccccccccc;MMM;cccccc;NMMkccccccccc:.",
  ":ccccccccc;MMM;cccccccc;WMMdcccccc:.",
  ":ccccccccccccccccccccccccccccccc:..",
  ":ccccccccccccccccccccccccccccc::.",
  ":ccccccccccccccccccccccccc:::..",
  "::::::::::::::::::::::::...",
];

/** Characters that belong to the R (everything else is the bubble). */
export const LOGO_LETTER = /[^c.:;,' ]/;

const LOGO_WIDTH = Math.max(...LOGO_ROWS.map(r => r.length));
export const asciiLogoRows = LOGO_ROWS.map(r => r.padEnd(LOGO_WIDTH));

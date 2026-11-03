export const profile = {
  name: 'Rayyan Omar',
  handle: 'RayyanOmar.exe',
  title: 'Software Engineering Student',
  intro: [
    'BASc Software Engineering (Co-op) at the University of Ottawa.',
    'I build full-stack and AI-driven systems with FastAPI, React, Spring Boot and multi-agent workflows.',
  ],
};

/** Monospaced logo for the home screen. Every row is padded to the same width. */
const LOGO_ROWS = [
  '###################',
  '######################',
  '######         ########',
  '######            ######',
  '######            ######',
  '######            ######',
  '######         ########',
  '######################',
  '###################',
  '######      ######',
  '######       ######',
  '######        ######',
  '######         ######',
  '######          ######',
  '######           ######',
  '######            ######',
];

const LOGO_WIDTH = Math.max(...LOGO_ROWS.map(r => r.length));
export const asciiLogo = LOGO_ROWS.map(r => r.padEnd(LOGO_WIDTH)).join('\n');

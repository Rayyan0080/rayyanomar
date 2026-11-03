export interface CommandDef {
  name: string;
  description: string;
}

export interface Section {
  name: string;
  path: string;
  description: string;
}

export const sections: Section[] = [
  { name: 'projects', path: '/projects', description: 'Software projects' },
  { name: 'experience', path: '/experience', description: 'Work and leadership experience' },
  { name: 'certifications', path: '/certifications', description: 'Certifications' },
  { name: 'interests', path: '/interests', description: 'Personal interests' },
  { name: 'contact', path: '/contact', description: 'Contact information' },
];

export const availableCommands: CommandDef[] = [
  { name: 'help', description: 'Show available commands' },
  { name: 'ls', description: 'List sections' },
  ...sections.map(s => ({ name: `cd ${s.name}`, description: s.description })),
  { name: 'cd ~', description: 'Return to home' },
  { name: 'resume', description: 'Download resume (PDF)' },
  { name: 'back', description: 'Go to previous page' },
  { name: 'clear', description: 'Clear terminal output' },
];

/** Width of the command column when commands are printed as plain text. */
export const COMMAND_COLUMN = Math.max(...availableCommands.map(c => c.name.length)) + 3;

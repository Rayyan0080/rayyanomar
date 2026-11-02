export interface CommandDef {
  name: string;
  description: string;
}

export const availableCommands: CommandDef[] = [
  { name: 'help', description: 'Show available commands' },
  { name: 'ls', description: 'List available sections' },
  { name: 'cd <section>', description: 'Navigate to a section' },
  { name: 'home', description: 'Go to home page' },
  { name: 'back', description: 'Go to previous page' },
  { name: 'pwd', description: 'Show current directory' },
  { name: 'clear', description: 'Clear terminal output' },
  { name: 'resume', description: 'Download resume PDF' },
];

export const shortcuts = [
  { key: 'H', label: 'Home' },
  { key: 'P', label: 'Projects' },
  { key: 'E', label: 'Experience' },
  { key: 'C', label: 'Certifications' },
  { key: 'I', label: 'Interests' },
  { key: 'T', label: 'Contact' },
  { key: 'R', label: 'Resume' },
  { key: 'ESC', label: 'Back' },
];

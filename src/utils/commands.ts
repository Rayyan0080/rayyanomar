export interface CommandDef {
  name: string;
  description: string;
}

/** Commands shown by `help` and on the home screen. */
export const availableCommands: CommandDef[] = [
  { name: 'help', description: 'Show available commands' },
  { name: 'ls [dir]', description: 'List the contents of a directory' },
  { name: 'cd <dir>', description: 'Open a directory (e.g. cd courses/ITI1121)' },
  { name: 'cd ..', description: 'Go up one directory' },
  { name: 'cd / or cd ~', description: 'Return to home' },
  { name: 'cd -', description: 'Return to the previous directory' },
  { name: 'pwd', description: 'Print the current directory' },
  { name: 'back', description: 'Go to the previous page' },
  { name: 'resume', description: 'Download resume (PDF)' },
  { name: 'clear', description: 'Clear terminal output (Ctrl+L)' },
];

/** Keyboard hints printed after the command list by `help`. */
export const keyHints = ['Tab completes directory names; Up/Down recall earlier commands.'];

/** Width of the command column when commands are printed as plain text. */
export const COMMAND_COLUMN = Math.max(...availableCommands.map(c => c.name.length)) + 3;

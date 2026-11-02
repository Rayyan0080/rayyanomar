import { TerminalLine } from '../types';

interface TerminalOutputProps {
  lines: TerminalLine[];
}

const colorMap: Record<TerminalLine['type'], string> = {
  input: 'text-terminal-purple',
  output: 'text-terminal-text',
  error: 'text-terminal-red',
  success: 'text-terminal-green',
  info: 'text-terminal-text',
  system: 'text-terminal-muted',
};

export default function TerminalOutput({ lines }: TerminalOutputProps) {
  return (
    <div className="flex flex-col">
      {lines.map((line, i) => (
        <div key={i} className={`${colorMap[line.type]} text-xs sm:text-sm whitespace-pre-wrap break-words`}>
          {line.prompt && (
            <span className="text-terminal-cyan mr-2">{line.prompt}</span>
          )}
          <span>{line.content}</span>
        </div>
      ))}
    </div>
  );
}

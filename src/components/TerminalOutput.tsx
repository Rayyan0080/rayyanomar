import { TerminalLine } from '../types';
import Prompt from './Prompt';

export default function TerminalOutput({ lines }: { lines: TerminalLine[] }) {
  if (lines.length === 0) return null;
  return (
    <div className="output">
      {lines.map((line, i) => (
        <div key={i} className={`line line-${line.type}`}>
          {line.type === 'input' && <Prompt path={line.path ?? '~'} />}
          {line.content}
        </div>
      ))}
    </div>
  );
}

import { Monitor } from 'lucide-react';

interface TerminalHeaderProps {
  currentPath: string;
}

export default function TerminalHeader({ currentPath }: TerminalHeaderProps) {
  return (
    <div className="bg-terminal-surface rounded-t-lg border border-terminal-border px-4 py-2.5 flex items-center gap-3">
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full bg-terminal-red/80" />
        <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
        <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
      </div>
      {/* Title */}
      <div className="flex-1 flex items-center justify-center gap-2 text-terminal-muted text-xs">
        <Monitor size={12} />
        <span>rayyan@portfolio:{currentPath}</span>
      </div>
      {/* Spacer to balance traffic lights */}
      <div className="w-[54px]" />
    </div>
  );
}

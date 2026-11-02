import { shortcuts } from '../utils/commands';

export default function CommandBar() {
  return (
    <div className="sticky bottom-0 bg-terminal-surface/95 backdrop-blur-sm border-t border-terminal-border px-4 py-2.5">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {shortcuts.map(s => (
          <span key={s.key} className="text-[10px] sm:text-xs whitespace-nowrap">
            <span className="text-terminal-amber font-semibold">[{s.key}]</span>
            <span className="text-terminal-muted ml-1">{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

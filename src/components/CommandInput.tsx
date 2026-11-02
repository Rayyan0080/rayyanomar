import { useRef, useEffect, type KeyboardEvent } from 'react';

interface CommandInputProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (cmd: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onHistoryUp: () => string;
  onHistoryDown: () => string;
  onClear: () => void;
  prompt: string;
}

export default function CommandInput({
  value,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  onHistoryUp,
  onHistoryDown,
  onClear,
  prompt,
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on any keypress when not already focused
  useEffect(() => {
    const handleGlobalKey = (e: globalThis.KeyboardEvent) => {
      if (
        inputRef.current &&
        document.activeElement !== inputRef.current &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        e.key.length === 1
      ) {
        inputRef.current.focus();
      }
    };
    document.addEventListener('keydown', handleGlobalKey);
    return () => document.removeEventListener('keydown', handleGlobalKey);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = onHistoryUp();
      onChange(prev);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = onHistoryDown();
      onChange(next);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      onClear();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2 group">
      <span className="text-terminal-cyan text-xs sm:text-sm whitespace-nowrap shrink-0">
        {prompt}
      </span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full bg-transparent text-terminal-text text-xs sm:text-sm outline-none caret-terminal-cyan"
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal command input"
        />
        {value === '' && (
          <span className="absolute left-0 top-0 text-terminal-cyan cursor-blink text-xs sm:text-sm">
            ▋
          </span>
        )}
      </div>
    </div>
  );
}

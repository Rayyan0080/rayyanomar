import { useState, useRef, useEffect, type ReactNode } from 'react';
import TerminalHeader from './TerminalHeader';
import CommandInput from './CommandInput';
import CommandBar from './CommandBar';
import TerminalOutput from './TerminalOutput';
import { useTerminal } from '../hooks/useTerminal';
import { useKeyboardNav } from '../hooks/useKeyboardNav';

interface TerminalProps {
  children: ReactNode;
}

export default function Terminal({ children }: TerminalProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    output,
    inputValue,
    setInputValue,
    executeCommand,
    currentPath,
    navigateUp,
    navigateDown,
    clearOutput,
  } = useTerminal();

  useKeyboardNav(inputFocused);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col max-w-5xl w-full mx-auto px-3 sm:px-6 py-4">
        <TerminalHeader currentPath={currentPath} />
        <div
          ref={scrollRef}
          className="flex-1 bg-terminal-bg terminal-glow rounded-b-lg border border-t-0 border-terminal-border overflow-y-auto p-4 sm:p-6 flex flex-col gap-1"
        >
          {/* Page content */}
          <div className="mb-4">{children}</div>

          {/* Terminal output history */}
          <TerminalOutput lines={output} />

          {/* Command input */}
          <CommandInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={executeCommand}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onHistoryUp={navigateUp}
            onHistoryDown={navigateDown}
            onClear={clearOutput}
            prompt={`rayyan@portfolio:${currentPath}$`}
          />
        </div>
      </div>
      <CommandBar />
    </div>
  );
}

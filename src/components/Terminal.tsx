import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import CommandInput from './CommandInput';
import TerminalOutput from './TerminalOutput';
import Prompt from './Prompt';
import { useTerminal } from '../hooks/useTerminal';

export default function Terminal({ children }: { children: ReactNode }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const {
    output,
    inputValue,
    setInputValue,
    executeCommand,
    currentPath,
    pageEcho,
    navigateUp,
    navigateDown,
    clearOutput,
  } = useTerminal();

  // A new page starts at the top, like a freshly drawn screen.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Keep the prompt in view as command output grows.
  useEffect(() => {
    if (output.length > 0) inputRef.current?.parentElement?.scrollIntoView({ block: 'nearest' });
  }, [output]);

  // Tapping the terminal (needed on touch devices) focuses the prompt, unless
  // the tap was on a link/button or the user is selecting text.
  const focusInput = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button')) return;
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <main className="terminal" onClick={focusInput}>
      {pageEcho && (
        <div className="line line-input">
          <Prompt path={pageEcho.path} />
          {pageEcho.command}
        </div>
      )}
      {children}
      <TerminalOutput lines={output} />
      <CommandInput
        inputRef={inputRef}
        value={inputValue}
        onChange={setInputValue}
        onSubmit={executeCommand}
        onHistoryUp={navigateUp}
        onHistoryDown={navigateDown}
        onClear={clearOutput}
        path={currentPath}
      />
    </main>
  );
}

import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TerminalLine } from '../types';
import { useCommandHistory } from './useCommandHistory';
import { downloadResume } from '../utils/download';
import { availableCommands, sections, COMMAND_COLUMN } from '../utils/commands';

const HOME_ALIASES = new Set(['~', '/', '..', '~/', 'home']);

function pathLabel(pathname: string): string {
  return pathname === '/' ? '~' : `~${pathname}`;
}

/** The command that produced the page currently shown, echoed above it. */
interface PageEcho {
  pathname: string;
  path: string;
  command: string;
}

export function useTerminal() {
  const [output, setOutput] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [pageEcho, setPageEcho] = useState<PageEcho | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToHistory, navigateUp, navigateDown, resetIndex } = useCommandHistory();

  const currentPath = pathLabel(location.pathname);

  const clearOutput = useCallback(() => setOutput([]), []);

  const executeCommand = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      setInputValue('');
      resetIndex();

      const echo: TerminalLine = { type: 'input', content: trimmed, path: currentPath };
      if (!trimmed) {
        setOutput(prev => [...prev, echo]);
        return;
      }
      addToHistory(trimmed);

      const [cmd, arg] = trimmed.toLowerCase().split(/\s+/);
      const out = (content: string): TerminalLine => ({ type: 'output', content });
      const err = (content: string): TerminalLine => ({ type: 'error', content });
      const print = (...lines: TerminalLine[]) => setOutput(prev => [...prev, echo, ...lines]);

      // Navigation replaces the screen with the target page, like running a
      // program that takes over the terminal. The command stays echoed on top.
      const goTo = (pathname: string) => {
        setOutput([]);
        setPageEcho({ pathname, path: currentPath, command: trimmed });
        navigate(pathname);
      };

      switch (cmd) {
        case 'help':
          print(
            ...availableCommands.map(c => out(c.name.padEnd(COMMAND_COLUMN) + c.description)),
          );
          break;
        case 'ls':
          print(...sections.map(s => out(`${s.name}/`.padEnd(COMMAND_COLUMN) + s.description)));
          break;
        case 'cd': {
          if (!arg || HOME_ALIASES.has(arg)) {
            goTo('/');
            break;
          }
          const name = arg.replace(/^~?\/?/, '').replace(/\/$/, '');
          const section = sections.find(s => s.name === name);
          if (section) goTo(section.path);
          else print(err(`cd: no such directory: ${arg}`));
          break;
        }
        case 'home':
          goTo('/');
          break;
        case 'back':
          // location.key is 'default' on the first page of this session, where
          // history.back() would leave the site.
          if (location.key === 'default') {
            if (location.pathname === '/') print(out('back: already at ~'));
            else goTo('/');
          } else {
            setOutput([]);
            setPageEcho(null);
            navigate(-1);
          }
          break;
        case 'pwd':
          print(out(currentPath));
          break;
        case 'clear':
          clearOutput();
          break;
        case 'resume':
          print(out('Downloading Rayyan_Omar_Resume.pdf'));
          downloadResume();
          break;
        default:
          print(err(`${cmd}: command not found. Type "help" for available commands.`));
      }
    },
    [addToHistory, clearOutput, currentPath, location.key, location.pathname, navigate, resetIndex],
  );

  return {
    output,
    inputValue,
    setInputValue,
    executeCommand,
    currentPath,
    pageEcho: pageEcho && pageEcho.pathname === location.pathname ? pageEcho : null,
    navigateUp,
    navigateDown,
    clearOutput,
  };
}

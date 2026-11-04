import { useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TerminalLine } from '../types';
import { useCommandHistory } from './useCommandHistory';
import { downloadResume } from '../utils/download';
import { availableCommands, keyHints, COMMAND_COLUMN } from '../utils/commands';
import { completePath, displayPath, nodeForPathname, resolve, root, type FsNode } from '../fs/tree';

const COMMANDS = ['help', 'ls', 'cd', 'pwd', 'back', 'resume', 'clear'];

/** The command that produced the page currently shown, echoed above it. */
interface PageEcho {
  pathname: string;
  path: string;
  command: string;
}

/** `ls`-style rows: name/ padded to a column, then the description. */
function listing(node: FsNode): string[] {
  const width = Math.max(...node.children.map(c => c.name.length + 1), 0) + 3;
  return node.children.map(c => `${c.name}/`.padEnd(width) + c.summary);
}

export function useTerminal() {
  const [output, setOutput] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [pageEcho, setPageEcho] = useState<PageEcho | null>(null);
  const previousPath = useRef<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToHistory, navigateUp, navigateDown, resetIndex } = useCommandHistory();

  // An unknown URL leaves the shell at home, like a failed cd.
  const cwd = nodeForPathname(location.pathname) ?? root;
  const currentPath = displayPath(cwd);

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

      const [word, ...args] = trimmed.split(/\s+/);
      const cmd = word.toLowerCase();
      const arg = args.join(' ');
      const out = (content: string): TerminalLine => ({ type: 'output', content });
      const err = (content: string): TerminalLine => ({ type: 'error', content });
      const print = (...lines: TerminalLine[]) => setOutput(prev => [...prev, echo, ...lines]);

      // Opening a directory replaces the screen with its page, like a program
      // taking over the terminal. The command stays echoed on top.
      const open = (node: FsNode) => {
        if (node === cwd) {
          print();
          return;
        }
        previousPath.current = cwd.path;
        setOutput([]);
        setPageEcho({ pathname: node.path, path: currentPath, command: trimmed });
        navigate(node.path);
      };

      switch (cmd) {
        case 'help':
          print(
            ...availableCommands.map(c => out(c.name.padEnd(COMMAND_COLUMN) + c.description)),
            out(''),
            ...keyHints.map(out),
          );
          break;
        case 'ls': {
          const target = arg ? resolve(cwd, arg) : cwd;
          if (!target) print(err(`ls: cannot access '${arg}': No such file or directory`));
          else if (target.children.length === 0) print(out('(no subdirectories)'));
          else print(...listing(target).map(out));
          break;
        }
        case 'cd': {
          if (args.length > 1) {
            print(err('cd: too many arguments'));
            break;
          }
          if (!arg) {
            open(root);
            break;
          }
          if (arg === '-') {
            const prev = previousPath.current ? nodeForPathname(previousPath.current) : null;
            if (prev) open(prev);
            else print(err('cd: OLDPWD not set'));
            break;
          }
          const target = resolve(cwd, arg);
          if (target) open(target);
          else print(err(`cd: no such file or directory: ${arg}`));
          break;
        }
        case 'pwd':
          print(out(cwd.path));
          break;
        case 'back':
          // location.key is 'default' on the first page of this session, where
          // history.back() would leave the site.
          if (location.key === 'default') {
            if (cwd === root) print(out('back: already at ~'));
            else open(root);
          } else {
            previousPath.current = cwd.path;
            setOutput([]);
            setPageEcho(null);
            navigate(-1);
          }
          break;
        case 'clear':
          clearOutput();
          break;
        case 'resume':
          print(out('Downloading Rayyan_Omar_Resume.pdf'));
          downloadResume();
          break;
        default:
          print(err(`${word}: command not found. Type "help" for available commands.`));
      }
    },
    [addToHistory, clearOutput, currentPath, cwd, location.key, navigate, resetIndex],
  );

  /**
   * Tab completion for the command name or the directory argument. Returns the
   * new input value; when several names match, they are printed like bash.
   */
  const complete = useCallback(
    (value: string): string => {
      const parts = value.split(/\s+/);
      if (parts.length === 1) {
        const matches = COMMANDS.filter(c => c.startsWith(parts[0].toLowerCase()));
        if (matches.length === 1) return `${matches[0]} `;
        if (matches.length > 1) {
          setOutput(prev => [...prev, { type: 'input', content: value, path: currentPath }, { type: 'output', content: matches.join('  ') }]);
        }
        return value;
      }
      const cmd = parts[0].toLowerCase();
      if (cmd !== 'cd' && cmd !== 'ls') return value;
      const partial = parts.slice(1).join(' ');
      const { value: completed, options } = completePath(cwd, partial);
      if (options.length) {
        setOutput(prev => [
          ...prev,
          { type: 'input', content: value, path: currentPath },
          { type: 'output', content: options.map(o => `${o}/`).join('  ') },
        ]);
      }
      return `${parts[0]} ${completed}`;
    },
    [currentPath, cwd],
  );

  return {
    output,
    inputValue,
    setInputValue,
    executeCommand,
    complete,
    currentPath,
    pageEcho: pageEcho && pageEcho.pathname === location.pathname ? pageEcho : null,
    navigateUp,
    navigateDown,
    clearOutput,
  };
}

import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TerminalLine } from '../types';
import { useCommandHistory } from './useCommandHistory';
import { downloadResume } from '../utils/download';

const ROUTES: Record<string, string> = {
  home: '/',
  projects: '/projects',
  experience: '/experience',
  certifications: '/certifications',
  interests: '/interests',
  contact: '/contact',
};

const ROUTE_NAMES: Record<string, string> = {
  '/': '~',
  '/projects': '~/projects',
  '/experience': '~/experience',
  '/certifications': '~/certifications',
  '/interests': '~/interests',
  '/contact': '~/contact',
};

export function useTerminal() {
  const [output, setOutput] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { addToHistory, navigateUp, navigateDown, resetIndex } = useCommandHistory();

  const currentPath = ROUTE_NAMES[location.pathname] || '~';

  const addLine = useCallback((line: TerminalLine) => {
    setOutput(prev => [...prev, line]);
  }, []);

  const addLines = useCallback((lines: TerminalLine[]) => {
    setOutput(prev => [...prev, ...lines]);
  }, []);

  const clearOutput = useCallback(() => {
    setOutput([]);
  }, []);

  const executeCommand = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    addToHistory(trimmed);
    addLine({ type: 'input', content: trimmed, prompt: `rayyan@portfolio:${currentPath}$` });

    const parts = trimmed.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1];

    switch (cmd) {
      case 'help': {
        addLines([
          { type: 'info', content: '' },
          { type: 'info', content: '  Available Commands:' },
          { type: 'info', content: '  ─────────────────────────────────────────' },
          { type: 'info', content: '  help                Show this help message' },
          { type: 'info', content: '  ls                  List available sections' },
          { type: 'info', content: '  cd <section>        Navigate to a section' },
          { type: 'info', content: '  home                Go to home page' },
          { type: 'info', content: '  back                Go to previous page' },
          { type: 'info', content: '  pwd                 Show current directory' },
          { type: 'info', content: '  clear               Clear terminal output' },
          { type: 'info', content: '  resume              Download resume PDF' },
          { type: 'info', content: '' },
          { type: 'info', content: '  Keyboard Shortcuts:' },
          { type: 'info', content: '  ─────────────────────────────────────────' },
          { type: 'info', content: '  [H] Home  [P] Projects  [E] Experience' },
          { type: 'info', content: '  [C] Certifications  [I] Interests' },
          { type: 'info', content: '  [T] Contact  [R] Resume  [ESC] Back' },
          { type: 'info', content: '' },
        ]);
        break;
      }
      case 'ls': {
        addLines([
          { type: 'info', content: '' },
          { type: 'success', content: '  projects/       Software development projects' },
          { type: 'success', content: '  experience/     Professional experience' },
          { type: 'success', content: '  certifications/ Certifications & qualifications' },
          { type: 'success', content: '  interests/      Personal interests & hobbies' },
          { type: 'success', content: '  contact/        Contact information' },
          { type: 'info', content: '' },
          { type: 'system', content: '  Type "cd <section>" to navigate, or use keyboard shortcuts.' },
          { type: 'info', content: '' },
        ]);
        break;
      }
      case 'cd': {
        if (!arg) {
          addLine({ type: 'error', content: '  Usage: cd <section>  (e.g., cd projects)' });
          break;
        }
        const route = ROUTES[arg];
        if (route) {
          addLine({ type: 'success', content: `  Navigating to ~/${arg}...` });
          setTimeout(() => navigate(route), 300);
        } else {
          addLine({ type: 'error', content: `  cd: no such directory: ${arg}` });
          addLine({ type: 'system', content: '  Type "ls" to see available sections.' });
        }
        break;
      }
      case 'home': {
        addLine({ type: 'success', content: '  Navigating to home...' });
        setTimeout(() => navigate('/'), 300);
        break;
      }
      case 'back': {
        addLine({ type: 'success', content: '  Going back...' });
        setTimeout(() => navigate(-1), 300);
        break;
      }
      case 'pwd': {
        addLine({ type: 'info', content: `  ${currentPath}` });
        break;
      }
      case 'clear': {
        clearOutput();
        break;
      }
      case 'resume': {
        addLine({ type: 'success', content: '  Downloading resume...' });
        downloadResume();
        break;
      }
      default: {
        addLine({ type: 'error', content: `  Command not found: ${cmd}` });
        addLine({ type: 'system', content: '  Type "help" for available commands.' });
      }
    }

    setInputValue('');
    resetIndex();
  }, [addLine, addLines, addToHistory, clearOutput, currentPath, navigate, resetIndex]);

  return {
    output,
    inputValue,
    setInputValue,
    executeCommand,
    currentPath,
    navigateUp,
    navigateDown,
    clearOutput,
  };
}

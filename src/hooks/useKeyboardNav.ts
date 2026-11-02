import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { downloadResume } from '../utils/download';

export function useKeyboardNav(inputFocused: boolean) {
  const navigate = useNavigate();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't capture shortcuts when typing in the command input
      if (inputFocused) return;

      // Don't interfere with browser shortcuts
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      switch (e.key.toLowerCase()) {
        case 'h':
          e.preventDefault();
          navigate('/');
          break;
        case 'p':
          e.preventDefault();
          navigate('/projects');
          break;
        case 'e':
          e.preventDefault();
          navigate('/experience');
          break;
        case 'c':
          e.preventDefault();
          navigate('/certifications');
          break;
        case 'i':
          e.preventDefault();
          navigate('/interests');
          break;
        case 't':
          e.preventDefault();
          navigate('/contact');
          break;
        case 'r':
          e.preventDefault();
          downloadResume();
          break;
        case 'escape':
          e.preventDefault();
          navigate(-1);
          break;
      }
    },
    [inputFocused, navigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

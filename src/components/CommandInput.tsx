import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react';
import Prompt from './Prompt';

interface CommandInputProps {
  inputRef: RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (v: string) => void;
  onSubmit: (cmd: string) => void;
  onHistoryUp: () => string;
  onHistoryDown: () => string;
  onClear: () => void;
  /** Tab completion: returns the completed input value. */
  onComplete: (value: string) => string;
  path: string;
}

/**
 * The real <input> is transparent and laid over a text mirror, so the cursor
 * can be drawn as a static block instead of the browser's blinking caret.
 */
export default function CommandInput({
  inputRef,
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  onClear,
  onComplete,
  path,
}: CommandInputProps) {
  const [caret, setCaret] = useState(0);
  const [focused, setFocused] = useState(false);

  // Typing anywhere on the page goes to the prompt.
  useEffect(() => {
    const handleGlobalKey = (e: globalThis.KeyboardEvent) => {
      const input = inputRef.current;
      if (!input || document.activeElement === input) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      // Leave Enter/Space on a focused link or button to activate it.
      if ((e.target as HTMLElement).closest?.('a, button') && (e.key === 'Enter' || e.key === ' ')) return;
      if (e.key.length === 1 || e.key === 'Enter' || e.key === 'Backspace' || e.key.startsWith('Arrow')) {
        input.focus();
      }
    };
    document.addEventListener('keydown', handleGlobalKey);
    return () => document.removeEventListener('keydown', handleGlobalKey);
  }, [inputRef]);

  // Focus on load, except on touch screens where it would pop the on-screen
  // keyboard over the home screen.
  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) inputRef.current?.focus({ preventScroll: true });
  }, [inputRef]);

  const syncCaret = () => setCaret(inputRef.current?.selectionStart ?? value.length);

  // After a history recall, move the caret to the end as soon as the new value
  // is committed (before the next key event can be handled).
  const caretToEnd = useRef(false);
  useLayoutEffect(() => {
    if (!caretToEnd.current) return;
    caretToEnd.current = false;
    inputRef.current?.setSelectionRange(value.length, value.length);
    setCaret(value.length);
  }, [value, inputRef]);

  const replaceValue = (next: string) => {
    caretToEnd.current = true;
    onChange(next);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(value);
      setCaret(0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      replaceValue(onHistoryUp());
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      replaceValue(onHistoryDown());
    } else if (e.key === 'Tab' && value.trim() && !e.shiftKey) {
      // Complete names like a shell. With an empty prompt, Tab keeps its usual
      // job of moving focus, so links stay reachable from the keyboard.
      e.preventDefault();
      replaceValue(onComplete(value));
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      onClear();
    }
  };

  const pos = Math.min(caret, value.length);
  const under = value[pos] ?? ' ';

  return (
    <div className="line input-line">
      <Prompt path={path} />
      <span className="input-mirror" aria-hidden="true">
        {value.slice(0, pos)}
        <span className={focused ? 'cursor' : 'cursor cursor-unfocused'}>{under}</span>
        {value.slice(pos + 1)}
      </span>
      <input
        ref={inputRef}
        type="text"
        className="input-native"
        value={value}
        onChange={e => {
          onChange(e.target.value);
          setCaret(e.target.selectionStart ?? e.target.value.length);
        }}
        onSelect={syncCaret}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        enterKeyHint="go"
        aria-label="Terminal command input"
      />
    </div>
  );
}

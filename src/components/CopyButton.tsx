import { useState } from 'react';

/** "[copy]" button that copies `text` to the clipboard and shows "[copied]" for 2 seconds. */
export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button type="button" className="text-button muted" onClick={handleCopy}>
      {copied ? '[copied]' : '[copy]'}
    </button>
  );
}

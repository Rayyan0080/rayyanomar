import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { contact } from '../data/contact';
import { displayPath } from '../fs/navigation';
import type { FsNode } from '../fs/FsNode';

function CopyButton({ text }: { text: string }) {
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

const rows: { label: string; value: string; href?: string; copy?: boolean }[] = [
  { label: 'email', value: contact.email, href: `mailto:${contact.email}`, copy: true },
  { label: 'phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`, copy: true },
  { label: 'github', value: contact.github, href: contact.github },
  { label: 'linkedin', value: contact.linkedin, href: contact.linkedin },
];

export default function Contact({ node }: { node: FsNode }) {
  return (
    <section className="page">
      <PageHeader title={displayPath(node)} />
      <dl className="kv-list">
        {rows
          .filter(r => r.value)
          .map(r => (
            <div key={r.label} className="kv-row">
              <dt className="accent">{r.label}</dt>
              <dd>
                <a
                  href={r.href}
                  {...(r.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {r.value}
                </a>
                {r.copy && (
                  <>
                    {' '}
                    <CopyButton text={r.value} />
                  </>
                )}
              </dd>
            </div>
          ))}
      </dl>
    </section>
  );
}

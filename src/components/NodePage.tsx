import { Link as RouterLink } from 'react-router-dom';
import type { Block, Link } from '../types';
import { displayPath, type FsNode } from '../fs/tree';
import PageHeader from './PageHeader';

/** Internal directories use the router; everything else opens in a new tab. */
export function Href({ link }: { link: Link }) {
  if (link.href.startsWith('/')) return <RouterLink to={link.href}>{link.label}</RouterLink>;
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  );
}

function Todo({ text }: { text: string }) {
  return <p className="todo">[to be added: {text}]</p>;
}

function BlockView({ block }: { block: Block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if ('todo' in block) return <Todo text={block.todo} />;
  if ('list' in block)
    return (
      <ul className="bullets">
        {block.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  if ('links' in block)
    return (
      <ul className="bullets">
        {block.links.map(l => (
          <li key={l.href}>
            <Href link={l} />
          </li>
        ))}
      </ul>
    );
  return (
    <dl className="fields">
      {block.fields.map(([label, value]) => (
        <div key={label} className="field-row">
          <dt className="muted">{label}</dt>
          <dd>
            {value === undefined ? (
              <span className="todo">[to be added]</span>
            ) : typeof value === 'string' ? (
              value
            ) : (
              <Href link={value} />
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Directory listing, like `ls` with descriptions; names link to each directory. */
export function DirListing({ node, heading = 'Contents' }: { node: FsNode; heading?: string }) {
  if (node.children.length === 0) return null;
  return (
    <section className="listing" aria-label="Directory contents">
      <h2 className="accent bold">{heading}</h2>
      <ul className="dir-list">
        {node.children.map(c => (
          <li key={c.name} className="dir-row">
            <RouterLink to={c.path} className="dir-name">
              {c.name}/
            </RouterLink>
            <span className="muted">{c.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The page for any directory: title, content sections, then its contents. */
export default function NodePage({ node }: { node: FsNode }) {
  return (
    <article className="page">
      <PageHeader title={displayPath(node)} />
      {node.title !== node.name && <p className="bold">{node.title}</p>}
      {node.sections.map(s => (
        <section key={s.heading} className="section">
          <h2 className="section-heading">{s.heading}</h2>
          {s.body.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </section>
      ))}
      <DirListing node={node} />
    </article>
  );
}

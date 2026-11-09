import { Link as RouterLink } from 'react-router-dom';
import type { FsNode } from '../fs/FsNode';

/** Directory listing, like `ls` with descriptions; names link to each directory. */
export default function DirListing({ node, heading = 'Contents' }: { node: FsNode; heading?: string }) {
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

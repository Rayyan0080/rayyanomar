import type { FsNode } from '../fs/FsNode';
import { displayPath } from '../fs/navigation';
import PageHeader from '../components/PageHeader';
import BlockView from '../components/BlockView';
import DirListing from '../components/DirListing';

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

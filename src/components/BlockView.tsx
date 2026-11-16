import type { Block } from '../types';
import Href from './Href';
import ViewOnlyImage from './ViewOnlyImage';

/** One block of page content: a paragraph, a bullet list, links, label/value fields or a view-only image. */
export default function BlockView({ block }: { block: Block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if ('viewOnly' in block) return <ViewOnlyImage image={block.viewOnly} />;
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
      {block.fields.map(([label, value]) =>
        value === undefined ? null : (
          <div key={label} className="field-row">
            <dt className="muted">{label}</dt>
            <dd>{typeof value === 'string' ? value : <Href link={value} />}</dd>
          </div>
        ),
      )}
    </dl>
  );
}

import type { Block } from '../types';
import Href from './Href';
import ViewOnlyImage from './ViewOnlyImage';

function Todo({ text }: { text: string }) {
  return <p className="todo">[to be added: {text}]</p>;
}

/** One block of page content: a paragraph, a bullet list, links, label/value fields, a view-only image or a placeholder. */
export default function BlockView({ block }: { block: Block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if ('todo' in block) return <Todo text={block.todo} />;
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

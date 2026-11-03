import PageHeader from '../components/PageHeader';
import { interests } from '../data/interests';

export default function Interests() {
  return (
    <section className="page">
      <PageHeader title="~/interests" />
      {interests.map(group => (
        <article key={group.category} className="entry">
          <p className="bold">{group.category}</p>
          <ul className="bullets">
            {group.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

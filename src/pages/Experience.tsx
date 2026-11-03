import PageHeader from '../components/PageHeader';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section className="page">
      <PageHeader title="~/experience" />
      {experience.map(exp => (
        <article key={exp.position + exp.organization} className="entry">
          <div className="entry-title">
            <span className="bold">{exp.position}</span>
            <span className="muted">
              {exp.startDate === exp.endDate ? exp.startDate : `${exp.startDate} - ${exp.endDate}`}
            </span>
          </div>
          <p className="muted">
            {exp.organization}
            {exp.location && `, ${exp.location}`}
          </p>
          <ul className="bullets">
            {exp.responsibilities.map(r => (
              <li key={r}>{r}</li>
            ))}
            {exp.achievements?.map(a => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          {exp.skills && exp.skills.length > 0 && <p className="muted">{exp.skills.join(', ')}</p>}
        </article>
      ))}
      <p className="muted">{experience.length} position(s)</p>
    </section>
  );
}

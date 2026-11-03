import PageHeader from '../components/PageHeader';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="page">
      <PageHeader title="~/projects" />
      {projects.map(p => (
        <article key={p.name} className="entry">
          <div className="entry-title">
            <span className="bold">{p.name}</span>
            {p.year && <span className="muted">{p.year}</span>}
          </div>
          <p className="muted">{p.technologies.join(', ')}</p>
          <p>{p.description}</p>
          {p.highlights && (
            <ul className="bullets">
              {p.highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {p.github && (
            <p>
              <span className="muted">github: </span>
              <a href={p.github} target="_blank" rel="noopener noreferrer">{p.github}</a>
            </p>
          )}
          {p.live && (
            <p>
              <span className="muted">live: </span>
              <a href={p.live} target="_blank" rel="noopener noreferrer">{p.live}</a>
            </p>
          )}
        </article>
      ))}
      <p className="muted">{projects.length} project(s)</p>
    </section>
  );
}

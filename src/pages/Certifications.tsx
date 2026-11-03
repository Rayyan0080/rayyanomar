import PageHeader from '../components/PageHeader';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section className="page">
      <PageHeader title="~/certifications" />
      {certifications.map(cert => (
        <article key={cert.name} className="entry">
          <div className="entry-title">
            <span className="bold">{cert.name}</span>
            <span className="muted">{cert.date}</span>
          </div>
          <p className="muted">{cert.issuer}</p>
          {cert.credentialUrl && (
            <p>
              <span className="muted">verify: </span>
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">{cert.credentialUrl}</a>
            </p>
          )}
        </article>
      ))}
      <p className="muted">
        {certifications.length === 0 ? 'No certifications listed yet.' : `${certifications.length} certification(s)`}
      </p>
    </section>
  );
}

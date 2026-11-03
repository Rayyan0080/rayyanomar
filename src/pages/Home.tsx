import { asciiLogo, profile } from '../data/profile';
import { availableCommands } from '../utils/commands';

export default function Home() {
  return (
    <section className="home">
      <pre className="logo" aria-label="R">{asciiLogo}</pre>
      <div className="home-info">
        <h1 className="accent bold">{profile.handle}</h1>
        <div className="muted" aria-hidden="true">{'-'.repeat(profile.handle.length)}</div>
        <p className="bold">{profile.name}</p>
        <p>{profile.title}</p>
        <div className="gap" />
        {profile.intro.map(line => (
          <p key={line}>{line}</p>
        ))}
        <div className="gap" />
        <h2 className="accent bold">Available Commands:</h2>
        <dl className="cmd-list">
          {availableCommands.map(c => (
            <div key={c.name} className="cmd-row">
              <dt>{c.name}</dt>
              <dd className="muted">{c.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

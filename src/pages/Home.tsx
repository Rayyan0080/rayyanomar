import { asciiLogoRows, LOGO_LETTER, profile } from '../data/profile';
import { availableCommands } from '../utils/commands';
import { root } from '../fs/tree';
import DirListing from '../components/DirListing';
import { useLogoFit } from '../hooks/useLogoFit';

/** Split a logo row into runs of bubble/letter characters for colouring. */
function logoRuns(row: string) {
  const runs: { letter: boolean; text: string }[] = [];
  for (const ch of row) {
    const letter = LOGO_LETTER.test(ch);
    const last = runs[runs.length - 1];
    if (last && last.letter === letter) last.text += ch;
    else runs.push({ letter, text: ch });
  }
  return runs;
}

const logoLines = asciiLogoRows.map(logoRuns);

export default function Home() {
  const { homeRef, logoRef, infoRef } = useLogoFit();
  return (
    <section className="home" ref={homeRef}>
      <pre className="logo" role="img" aria-label="R logo" ref={logoRef}>
        {logoLines.map((runs, i) => (
          <span key={i}>
            {runs.map((r, j) => (r.letter ? <span key={j} className="logo-letter">{r.text}</span> : r.text))}
            {i < logoLines.length - 1 && '\n'}
          </span>
        ))}
      </pre>
      <div className="home-info" ref={infoRef}>
        <h1 className="banner" aria-label={profile.handle}>
          <pre aria-hidden="true">{profile.handleBanner}</pre>
        </h1>
        <div className="gap" />
        <p className="bold">{profile.name}</p>
        <p>{profile.title}</p>
        <div className="gap" />
        <div className="intro">
          {profile.intro.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
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
        <div className="gap" />
        <DirListing node={root} heading="Directories:" />
      </div>
    </section>
  );
}

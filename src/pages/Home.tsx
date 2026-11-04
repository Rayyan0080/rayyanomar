import { useLayoutEffect, useRef } from 'react';
import { asciiLogoRows, LOGO_LETTER, profile } from '../data/profile';
import { availableCommands } from '../utils/commands';
import { root } from '../fs/tree';
import { DirListing } from '../components/NodePage';

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

/** Largest share of the row the logo may take, so the text keeps room. */
const LOGO_MAX_WIDTH = 0.4;

/**
 * Size the logo so it is as tall as the text column beside it, capped by
 * width and never smaller than body text. Skipped when the layout is stacked
 * (phones), where the CSS sizes the logo to the screen width instead.
 */
function useLogoFit() {
  const homeRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLPreElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const home = homeRef.current!;
    const logo = logoRef.current!;
    const info = infoRef.current!;

    const fit = () => {
      if (getComputedStyle(home).flexDirection === 'column') {
        home.style.removeProperty('--logo-size');
        return;
      }
      const logoSize = parseFloat(getComputedStyle(logo).fontSize);
      const base = parseFloat(getComputedStyle(home).fontSize);
      // Logo dimensions per 1px of font size.
      const heightPerPx = logo.offsetHeight / logoSize;
      const widthPerPx = logo.offsetWidth / logoSize;
      const byHeight = info.offsetHeight / heightPerPx;
      const byWidth = (home.clientWidth * LOGO_MAX_WIDTH) / widthPerPx;
      const size = Math.max(base, Math.min(byHeight, byWidth));
      // Round so tiny re-measurements don't keep retriggering the observer.
      home.style.setProperty('--logo-size', `${Math.round(size * 2) / 2}px`);
    };

    const observer = new ResizeObserver(fit);
    observer.observe(home);
    observer.observe(info);
    fit();
    return () => observer.disconnect();
  }, []);

  return { homeRef, logoRef, infoRef };
}

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

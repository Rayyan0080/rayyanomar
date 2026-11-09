import { useLayoutEffect, useRef } from 'react';

/** Largest share of the row the logo may take, so the text keeps room. */
const LOGO_MAX_WIDTH = 0.4;

/**
 * Size the logo so it is as tall as the text column beside it, capped by
 * width and never smaller than body text. Skipped when the layout is stacked
 * (phones), where the CSS sizes the logo to the screen width instead.
 */
export function useLogoFit() {
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

import { useEffect, useRef, useState } from 'react';
import type { ViewOnlyImage as ViewOnly } from '../types';

/**
 * Shows an image view-only. It is drawn on a canvas, so there is no "Save image as"
 * and no image link on the page. Right-click and dragging are blocked, printing hides
 * it (see .view-only in index.css), and the whole page goes black while the window is out
 * of focus or a screenshot key (Print Screen, Win/Cmd, Ctrl+Shift) is held, which catches
 * most screenshot and recording tools.
 * shortcut: a browser cannot fully stop screenshots, screen recording or someone saving
 * the file from dev tools. The watermark baked into the image is what marks any copy.
 */
export default function ViewOnlyImage({ image }: { image: ViewOnly }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inFocus, setInFocus] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };
    img.src = import.meta.env.BASE_URL + image.src;
  }, [image.src]);

  useEffect(() => {
    const onBlur = () => setInFocus(false);
    const onFocus = () => setInFocus(true);
    const onVisibility = () => setInFocus(!document.hidden);
    // Win+Shift+S, Cmd+Shift+3/4/5 and Print Screen all start with one of these keys held.
    const onKey = (e: KeyboardEvent) => {
      setInFocus(!(e.key === 'PrintScreen' || e.metaKey || (e.ctrlKey && e.shiftKey)));
      // The OS takes the shot before the browser hears the key, so wipe the copied image.
      if (e.key === 'PrintScreen') navigator.clipboard?.writeText('').catch(() => {});
    };
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);
    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
    };
  }, []);

  const block = (e: { preventDefault: () => void }) => e.preventDefault();

  return (
    <figure className="view-only" onContextMenu={block} onDragStart={block} onCopy={block}>
      <canvas ref={canvasRef} role="img" aria-label={image.alt} />
      {!inFocus && <div className="view-only-blackout" aria-hidden="true" />}
      <figcaption className="muted">{image.caption}</figcaption>
    </figure>
  );
}

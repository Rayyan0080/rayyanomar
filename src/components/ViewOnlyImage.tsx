import { useEffect, useRef, useState } from 'react';
import type { ViewOnlyImage as ViewOnly } from '../types';

/**
 * Shows an image view-only. It is drawn on a canvas, so there is no "Save image as"
 * and no image link on the page. Right-click and dragging are blocked, printing hides
 * it (see .view-only in index.css), and it blurs while the window is out of focus,
 * which catches some screenshot and recording tools.
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
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const block = (e: { preventDefault: () => void }) => e.preventDefault();

  return (
    <figure className="view-only" onContextMenu={block} onDragStart={block} onCopy={block}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={image.alt}
        className={inFocus ? undefined : 'view-only-hidden'}
      />
      <figcaption className="muted">{image.caption}</figcaption>
    </figure>
  );
}

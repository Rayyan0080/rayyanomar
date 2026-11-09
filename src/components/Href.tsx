import { Link as RouterLink } from 'react-router-dom';
import type { Link } from '../types';

/** A link. Internal directories use the router; everything else opens in a new tab. */
export default function Href({ link }: { link: Link }) {
  if (link.href.startsWith('/')) return <RouterLink to={link.href}>{link.label}</RouterLink>;
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  );
}

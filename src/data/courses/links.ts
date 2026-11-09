/** Link helpers for the course repositories on GitHub. */
import type { Link } from '../../types';

export const GH = 'https://github.com/Rayyan0080';

/** Link to a folder (or file) inside one of the course repositories. */
export const src = (repo: string, branch: string, path: string, label = 'Source code'): Link[] => [
  { label, href: encodeURI(`${GH}/${repo}/tree/${branch}/${path}`) },
];
export const py = (path: string) => src('phythone-coursework', 'main', path);
export const iti = (path: string) => src('ITI1121', 'main', path);
export const csi = (path: string) => src('CSI-2110-Labs', 'master', path);
export const seg = (path: string) => src('SEG2105-Coursework', 'main', path);

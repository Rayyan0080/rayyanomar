/** Finding directories by path: used by the terminal (cd, ls, Tab) and the router. */
import type { FsNode } from './FsNode';
import { root } from './tree';

/** Prompt-style label: '~' for the root, '~/courses/ITI1121' below it. */
export function displayPath(node: FsNode): string {
  return node.path === '/' ? '~' : `~${node.path}`;
}

/** Find a child by name, ignoring case and a trailing slash. */
function child(node: FsNode, name: string): FsNode | undefined {
  const n = name.toLowerCase();
  return node.children.find(c => c.name.toLowerCase() === n);
}

/**
 * Resolve a path typed in the terminal (or a URL path) against `cwd`.
 * Supports absolute paths (/x, ~/x), relative paths, '.', '..' and '~'.
 */
export function resolve(cwd: FsNode, input: string): FsNode | null {
  let path = input.trim();
  let node = cwd;
  if (path === '~' || path.startsWith('~/')) {
    node = root;
    path = path.slice(1);
  } else if (path.startsWith('/')) {
    node = root;
  }
  for (const seg of path.split('/')) {
    if (!seg || seg === '.') continue;
    if (seg === '..') {
      node = node.parent ?? node;
      continue;
    }
    const next = child(node, decodeURIComponent(seg));
    if (!next) return null;
    node = next;
  }
  return node;
}

/** Look up the node for a router pathname. */
export function nodeForPathname(pathname: string): FsNode | null {
  return resolve(root, pathname || '/');
}

/**
 * Tab completion for a partial path argument. Returns the completed argument
 * and, when several names match, the candidates to show.
 */
export function completePath(cwd: FsNode, partial: string): { value: string; options: string[] } {
  const slash = partial.lastIndexOf('/');
  const dirPart = slash >= 0 ? partial.slice(0, slash + 1) : '';
  const prefix = (slash >= 0 ? partial.slice(slash + 1) : partial).toLowerCase();
  const dir = dirPart ? resolve(cwd, dirPart) : cwd;
  if (!dir) return { value: partial, options: [] };

  const names = [
    ...(prefix === '' || '..'.startsWith(prefix) ? (dir.parent && prefix.startsWith('.') ? ['..'] : []) : []),
    ...dir.children.map(c => c.name).filter(n => n.toLowerCase().startsWith(prefix)),
  ];
  if (names.length === 0) return { value: partial, options: [] };
  if (names.length === 1) return { value: `${dirPart}${names[0]}/`, options: [] };

  // Extend to the longest common prefix, keeping the first match's casing.
  let common = names[0];
  for (const n of names) {
    let i = 0;
    while (i < common.length && i < n.length && common[i].toLowerCase() === n[i].toLowerCase()) i++;
    common = common.slice(0, i);
  }
  const value = common.length > prefix.length ? `${dirPart}${common}` : partial;
  return { value, options: value === partial ? names : [] };
}

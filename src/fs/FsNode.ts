import type { Section } from '../types';

/** One directory of the site. Every directory has its own page. */
export interface FsNode {
  /** Directory name ('' for the root). */
  name: string;
  title: string;
  /** One-line description shown by `ls`. */
  summary: string;
  /** Absolute path, e.g. '/courses/ITI1121' ('/' for the root). */
  path: string;
  sections: Section[];
  /** Pages with a hand-written layout instead of sections. */
  view?: 'home' | 'contact';
  children: FsNode[];
  parent?: FsNode;
}

/** A node before `build` (in tree.ts) fills in its path, parent and children. */
export type Draft = Omit<FsNode, 'path' | 'children' | 'parent'> & { children?: Draft[] };

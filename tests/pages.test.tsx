// Every directory in the site renders its page, and each page's HTML matches
// the saved snapshot (so a refactor can't change what visitors see).
import { describe, expect, it } from 'vitest';
import { root } from '../src/fs/tree';
import type { FsNode } from '../src/fs/tree';
import { renderAt } from './render';

function allNodes(node: FsNode): FsNode[] {
  return [node, ...node.children.flatMap(allNodes)];
}

const nodes = allNodes(root);

describe('every page', () => {
  it('has a lot of pages to check', () => {
    expect(nodes.length).toBeGreaterThan(50);
  });

  it.each(nodes.map(n => n.path))('%s renders', path => {
    const { container } = renderAt(path);
    expect(container.textContent).not.toContain('no such file or directory');
    expect(container.querySelector('input[aria-label="Terminal command input"]')).not.toBeNull();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('unknown path shows the not-found message', () => {
    const { container } = renderAt('/nope');
    expect(container.textContent).toContain('cd: no such file or directory: /nope');
  });
});

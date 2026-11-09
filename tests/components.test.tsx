// Shared pieces with behaviour of their own.
import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderAt } from './render';

describe('contact page', () => {
  it('copy buttons copy the value and confirm', async () => {
    const writeText = vi.fn(() => Promise.resolve());
    Object.assign(navigator, { clipboard: { writeText } });
    renderAt('/contact');
    const [first] = screen.getAllByText('[copy]');
    await act(async () => fireEvent.click(first));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('@'));
    expect(screen.getByText('[copied]')).toBeTruthy();
  });
});

describe('links', () => {
  it('internal links stay inside the site', () => {
    renderAt('/projects/software-development/aeroguard');
    const internal = screen.getByText('Hackathon entry') as HTMLAnchorElement;
    expect(internal.getAttribute('href')).toBe('/experience/hackathons/hackconcordia');
    expect(internal.target).toBe('');
  });

  it('outside links open in a new tab', () => {
    renderAt('/courses/ITI1121');
    const external = [...document.querySelectorAll('a')].find(a => a.href.startsWith('https://'));
    expect(external?.target).toBe('_blank');
    expect(external?.rel).toBe('noopener noreferrer');
  });

  it('clicking a directory in a listing opens it', () => {
    renderAt('/');
    fireEvent.click(screen.getByText('courses/'));
    expect(document.querySelector('h1')?.textContent).toBe('~/courses');
  });
});

describe('view-only poster on the NRC page', () => {
  it('is a canvas in the Links section, with no image link to save', () => {
    renderAt('/experience/nrc');
    const canvas = screen.getByRole('img', { name: /Ultra-High Temperature Ceramics/ });
    expect(canvas.tagName).toBe('CANVAS');
    expect(canvas.closest('section')?.querySelector('h2')?.textContent).toBe('Links');
    expect(document.querySelector('img, a[href*="poster"]')).toBeNull();
  });

  it('blocks right-click and dragging, and blacks out the page on focus loss or screenshot keys', () => {
    renderAt('/experience/nrc');
    const figure = document.querySelector('.view-only')!;
    expect(fireEvent.contextMenu(figure)).toBe(false);
    expect(fireEvent.dragStart(figure)).toBe(false);
    act(() => {
      window.dispatchEvent(new Event('blur'));
    });
    expect(document.querySelector('.view-only-blackout')).not.toBeNull();
    act(() => {
      window.dispatchEvent(new Event('focus'));
    });
    expect(document.querySelector('.view-only-blackout')).toBeNull();
    fireEvent.keyDown(window, { key: 'PrintScreen' });
    expect(document.querySelector('.view-only-blackout')).not.toBeNull();
    fireEvent.keyUp(window, { key: 'a' });
    expect(document.querySelector('.view-only-blackout')).toBeNull();
  });
});

describe('certifications', () => {
  it('stay hidden while there are none', () => {
    renderAt('/');
    expect(screen.queryByText('certifications/')).toBeNull();
    expect(renderAt('/certifications').container.textContent).toContain('no such file or directory');
  });
});

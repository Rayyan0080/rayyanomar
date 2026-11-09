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

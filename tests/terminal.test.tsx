// The terminal prompt: every command, Tab completion and command history.
import { describe, expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderAt } from './render';

const input = () => screen.getByLabelText('Terminal command input') as HTMLInputElement;
const heading = () => document.querySelector('h1')?.textContent;

function run(cmd: string) {
  fireEvent.change(input(), { target: { value: cmd } });
  fireEvent.keyDown(input(), { key: 'Enter' });
}

function tab(value: string) {
  fireEvent.change(input(), { target: { value } });
  fireEvent.keyDown(input(), { key: 'Tab' });
  return input().value;
}

const output = () => document.querySelector('.output')?.textContent ?? '';

describe('commands', () => {
  it('help lists the commands', () => {
    renderAt('/');
    run('help');
    expect(output()).toContain('Show available commands');
    expect(output()).toContain('Tab completes');
  });

  it('ls lists the current and a named directory', () => {
    renderAt('/');
    run('ls');
    expect(output()).toContain('courses/');
    run('ls courses');
    expect(output()).toContain('ITI1121/');
    run('ls missing');
    expect(output()).toContain("ls: cannot access 'missing'");
    run('ls contact');
    expect(output()).toContain('(no subdirectories)');
  });

  it('cd opens directories, relative, absolute, .., ~ and -', () => {
    renderAt('/');
    run('cd courses');
    expect(heading()).toBe('~/courses');
    run('cd iti1121/labs');
    expect(heading()).toBe('~/courses/ITI1121/labs');
    run('cd ..');
    expect(heading()).toBe('~/courses/ITI1121');
    run('cd /projects');
    expect(heading()).toBe('~/projects');
    run('cd -');
    expect(heading()).toBe('~/courses/ITI1121');
    run('cd');
    expect(document.querySelector('.home')).not.toBeNull();
    run('cd ~/contact');
    expect(heading()).toBe('~/contact');
  });

  it('cd reports errors', () => {
    renderAt('/');
    run('cd nowhere');
    expect(output()).toContain('cd: no such file or directory: nowhere');
    run('cd a b');
    expect(output()).toContain('cd: too many arguments');
    run('cd -');
    expect(output()).toContain('cd: OLDPWD not set');
  });

  it('pwd prints the path', () => {
    renderAt('/courses');
    run('pwd');
    expect(output()).toContain('/courses');
  });

  it('back goes home from a first page, and to the previous page later', () => {
    renderAt('/');
    run('back');
    expect(output()).toContain('back: already at ~');
    run('cd courses');
    run('cd ITI1121');
    run('back');
    expect(heading()).toBe('~/courses');
  });

  it('clear and Ctrl+L empty the output', () => {
    renderAt('/');
    run('pwd');
    run('clear');
    expect(document.querySelector('.output')).toBeNull();
    run('pwd');
    fireEvent.keyDown(input(), { key: 'l', ctrlKey: true });
    expect(document.querySelector('.output')).toBeNull();
  });

  it('unknown commands say so', () => {
    renderAt('/');
    run('rm -rf');
    expect(output()).toContain('rm: command not found');
  });

  it('resume prints the download line', () => {
    renderAt('/');
    run('resume');
    expect(output()).toContain('Downloading Rayyan_Omar_Resume.pdf');
  });
});

describe('Tab completion', () => {
  it('completes commands and directory names', () => {
    renderAt('/');
    expect(tab('he')).toBe('help ');
    expect(tab('cd cou')).toBe('cd courses/');
    expect(tab('cd courses/iti112')).toBe('cd courses/iti112');
    expect(output()).toContain('ITI1120/  ITI1121/');
    expect(tab('pwd x')).toBe('pwd x');
  });

  it('lists several matching commands', () => {
    renderAt('/');
    tab('c');
    expect(output()).toContain('cd  clear');
  });
});

describe('history', () => {
  it('Up and Down recall earlier commands', () => {
    renderAt('/');
    run('pwd');
    run('ls');
    fireEvent.keyDown(input(), { key: 'ArrowUp' });
    expect(input().value).toBe('ls');
    fireEvent.keyDown(input(), { key: 'ArrowUp' });
    expect(input().value).toBe('pwd');
    fireEvent.keyDown(input(), { key: 'ArrowDown' });
    expect(input().value).toBe('ls');
    fireEvent.keyDown(input(), { key: 'ArrowDown' });
    expect(input().value).toBe('');
  });
});

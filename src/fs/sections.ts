/**
 * Helpers that build page sections from content fields. A field that is
 * missing produces no section at all.
 */
import type { Link, Section } from '../types';

export function optionalText(heading: string, value: string | undefined): Section[] {
  return value ? [{ heading, body: [value] }] : [];
}

export function optionalList(heading: string, items: string[] | undefined): Section[] {
  return items?.length ? [{ heading, body: [{ list: items }] }] : [];
}

export function links(heading: string, items: Link[] | undefined): Section[] {
  return items?.length ? [{ heading, body: [{ links: items }] }] : [];
}

export function note(value: string | undefined): Section[] {
  return value ? [{ heading: 'Note', body: [value] }] : [];
}

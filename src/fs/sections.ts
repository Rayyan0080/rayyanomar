/**
 * Helpers that build page sections from content fields. A field that is
 * missing becomes a visible "[to be added: ...]" placeholder or is left out.
 */
import type { Link, Section } from '../types';

/** A section whose body is `value`, or a placeholder naming what is missing. */
export function text(heading: string, value: string | undefined, missing: string): Section {
  return { heading, body: [value ?? { todo: missing }] };
}

export function list(heading: string, items: string[] | undefined, missing: string): Section {
  return { heading, body: [items?.length ? { list: items } : { todo: missing }] };
}

export function optionalText(heading: string, value: string | undefined): Section[] {
  return value ? [{ heading, body: [value] }] : [];
}

/** Like `list`, but omitted entirely when there is nothing to show. */
export function optionalList(heading: string, items: string[] | undefined): Section[] {
  return items?.length ? [{ heading, body: [{ list: items }] }] : [];
}

export function links(heading: string, items: Link[] | undefined, missing?: string): Section[] {
  if (items?.length) return [{ heading, body: [{ links: items }] }];
  return missing ? [{ heading, body: [{ todo: missing }] }] : [];
}

export function note(value: string | undefined): Section[] {
  return value ? [{ heading: 'Note', body: [value] }] : [];
}

/** Turns entries from data/experience.ts into directories. */
import type { Block, Experience, Field, Section } from '../types';
import { projects } from '../data/projects';
import { projectNode } from './projectNodes';
import type { Draft } from './FsNode';
import { links, optionalList, optionalText } from './sections';

export function experienceNode(e: Experience, detailed: boolean): Draft {
  // Same page as the project's own directory, so the two can never drift apart.
  if (e.project) return { ...projectNode(projects.find(p => p.slug === e.project)!), name: e.slug, summary: e.summary };

  const facts = ([
    ['organization', e.organization],
    ['role', e.role],
    ['dates', e.dates],
    ['location', e.location],
  ] as Field[]).filter(([, v]) => v);
  const sections: Section[] = [];

  if (e.children) {
    // A grouping directory such as /experience/hackathons.
    if (e.organizationDescription) sections.push({ heading: 'About', body: [e.organizationDescription] });
  } else if (detailed) {
    sections.push(
      { heading: 'Position', body: [{ fields: facts }] },
      ...optionalText('Summary', e.overview),
      ...optionalText('Organization', e.organizationDescription),
      ...optionalList('Responsibilities', e.responsibilities),
      ...optionalList('Skills', e.skills),
      ...optionalList('Contributions and projects', e.contributions),
      ...optionalList('Achievements and outcomes', e.achievements),
      ...linksSection(e),
    );
  } else {
    sections.push(
      { heading: 'Summary', body: [{ fields: facts }] },
      ...optionalList('Contributions', e.contributions),
      ...optionalList('Achievements', e.achievements),
      ...optionalList('Skills and tools', e.skills),
      ...links('Links', e.links),
    );
  }
  sections.push(...(e.sections ?? []));

  return {
    name: e.slug,
    title: e.children ? e.organization : `${e.role ? `${e.role} - ` : ''}${e.organization}`,
    summary: e.summary,
    sections,
    children: e.children?.map(c => experienceNode(c, false)),
  };
}

/** Links plus any view-only proof (e.g. a research poster); no section when there is neither. */
function linksSection(e: Experience): Section[] {
  const body: Block[] = [
    ...(e.links?.length ? [{ links: e.links }] : []),
    ...(e.proof ?? []).map(viewOnly => ({ viewOnly })),
  ];
  return body.length ? [{ heading: 'Links', body }] : [];
}

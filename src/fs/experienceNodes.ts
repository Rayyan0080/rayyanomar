/** Turns entries from data/experience.ts into directories. */
import type { Block, Experience, Field, Section } from '../types';
import type { Draft } from './FsNode';
import { links, list, optionalList, text } from './sections';

export function experienceNode(e: Experience, detailed: boolean): Draft {
  const facts: Field[] = [
    ['organization', e.organization],
    ['role', e.role],
    ['dates', e.dates],
    ['location', e.location],
  ];
  const sections: Section[] = [];

  if (e.children) {
    // A grouping directory such as /experience/hackathons.
    if (e.organizationDescription) sections.push({ heading: 'About', body: [e.organizationDescription] });
  } else if (detailed) {
    sections.push(
      { heading: 'Position', body: [{ fields: facts }] },
      text('Organization', e.organizationDescription, 'Description of the organization'),
      list('Responsibilities', e.responsibilities, 'Main responsibilities in this role'),
      list('Skills', e.skills, 'Technical and professional skills used or developed'),
      ...optionalList('Contributions and projects', e.contributions),
      ...optionalList('Achievements and outcomes', e.achievements),
      linksSection(e),
    );
  } else {
    sections.push(
      { heading: 'Summary', body: [{ fields: facts.filter(([, v]) => v) }] },
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

/** Links plus any view-only proof (e.g. a research poster), or a placeholder when there is neither. */
function linksSection(e: Experience): Section {
  const body: Block[] = [
    ...(e.links?.length ? [{ links: e.links }] : []),
    ...(e.proof ?? []).map(viewOnly => ({ viewOnly })),
  ];
  return { heading: 'Links', body: body.length ? body : [{ todo: 'Relevant links and supporting material' }] };
}

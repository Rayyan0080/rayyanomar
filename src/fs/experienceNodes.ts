/** Turns entries from data/experience.ts into directories. */
import type { Experience, Field, Section } from '../types';
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
      list('Contributions and projects', e.contributions, 'Specific contributions or projects'),
      list('Achievements and outcomes', e.achievements, 'Results or recognition from this role'),
      ...links('Links', e.links, 'Relevant links and supporting material'),
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

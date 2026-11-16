/** Turns courses from data/courses/ (with their assignments and labs) into directories. */
import type { Assignment, Course, Field, Lab } from '../types';
import type { Draft } from './FsNode';
import { links, note, optionalList, optionalText } from './sections';

function assignmentNode(a: Assignment): Draft {
  return {
    name: a.slug,
    title: a.name,
    summary: a.name,
    sections: [
      ...optionalText('Overview', a.objective),
      ...optionalText('Problem statement', a.problem),
      ...optionalList('Requirements', a.requirements),
      ...optionalText('Approach and methodology', a.approach),
      ...optionalList('Techniques and concepts', a.concepts),
      ...optionalList('Technologies and tools', a.tools),
      ...optionalList('Technical specifications', a.specs),
      ...optionalList('My implementation and contributions', a.implementation),
      ...optionalText('Results and learning outcomes', a.results),
      ...optionalList('Typical output', a.output),
      ...links('Source code', a.links),
      ...note(a.note),
    ],
  };
}

function labNode(l: Lab): Draft {
  return {
    name: l.slug,
    title: l.name,
    summary: l.name,
    sections: [
      ...optionalText('Overview', l.objective),
      ...optionalList('Techniques and concepts', l.concepts),
      ...optionalList('Equipment, software and tools', l.tools),
      ...optionalList('Technical specifications', l.specs),
      ...optionalList('Procedures performed', l.procedure),
      ...optionalList('My work and contributions', l.work),
      ...optionalList('Implementation files', l.files),
      ...optionalText('Results and findings', l.results),
      ...optionalList('Typical output', l.output),
      ...optionalList('Skills developed', l.skills),
      ...links('Source code', l.links),
      ...note(l.note),
    ],
  };
}

function collectionNode(slug: string, title: string, items: Draft[], course: string): Draft[] {
  return items.length ? [{ name: slug, title: `${course} ${title}`, summary: `${items.length} ${title.toLowerCase().slice(0, items.length === 1 ? -1 : undefined)}`, sections: [], children: items }] : [];
}

export function courseNode(c: Course): Draft {
  return {
    name: c.code,
    title: `${c.code} - ${c.name}`,
    summary: c.name,
    sections: [
      { heading: 'Course', body: [{ fields: [['code', c.code], ['name', c.name]] }] },
      ...(c.description ? [{ heading: 'Description', body: [c.description, ...(c.descriptionSource ? [{ fields: [['source', c.descriptionSource]] as Field[] }] : [])] }] : []),
      ...optionalList('Techniques used', c.concepts),
      ...optionalList('Technical specifications', c.specs),
      ...links('Repository', c.links),
      ...(c.sections ?? []),
    ],
    children: [
      ...collectionNode('assignments', 'Assignments', (c.assignments ?? []).map(assignmentNode), c.code),
      ...collectionNode('labs', 'Labs', (c.labs ?? []).map(labNode), c.code),
    ],
  };
}

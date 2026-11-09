/**
 * The site as a directory tree: the top-level directories, built from the
 * content in src/data. `root` is the home directory; every other page hangs
 * off it. Path lookup and Tab completion live in navigation.ts.
 */
import type { Block } from '../types';
import type { Draft, FsNode } from './FsNode';
import { experience } from '../data/experience';
import { courses } from '../data/courses';
import { projectCategories, projects } from '../data/projects';
import { certifications } from '../data/certifications';
import { experienceNode } from './experienceNodes';
import { courseNode } from './courseNodes';
import { projectNode } from './projectNodes';

const draft: Draft = {
  name: '',
  title: 'home',
  summary: 'Home',
  view: 'home',
  sections: [],
  children: [
    {
      name: 'experience',
      title: 'Experience',
      summary: 'Work, research and leadership experience',
      sections: [],
      children: experience.map(e => experienceNode(e, true)),
    },
    {
      name: 'projects',
      title: 'Projects',
      summary: 'Software, engineering, personal and university projects',
      sections: [],
      children: projectCategories.map(cat => {
        const items = projects.filter(p => p.category === cat.slug);
        return {
          name: cat.slug,
          title: cat.slug,
          summary: cat.summary,
          sections: [
            { heading: 'About', body: [cat.description] },
            ...(items.length ? [] : [{ heading: 'Projects', body: [{ todo: 'Projects in this category' } as Block] }]),
          ],
          children: items.map(projectNode),
        };
      }),
    },
    {
      name: 'courses',
      title: 'Courses',
      summary: 'University courses with assignments and labs',
      sections: [
        {
          heading: 'About',
          body: ['Software Engineering (Co-op) courses at the University of Ottawa. Each course lists its assignments/ and labs/.'],
        },
      ],
      children: courses.map(courseNode),
    },
    // Hidden until data/certifications.ts has at least one entry; then it appears on its own.
    ...(certifications.length
      ? [
          {
            name: 'certifications',
            title: 'Certifications',
            summary: 'Certifications',
            sections: certifications.map(c => ({
              heading: c.name,
              body: [{ fields: [['issuer', c.issuer], ['date', c.date], ['verify', c.credentialUrl ? { label: c.credentialUrl, href: c.credentialUrl } : undefined]] }] as Block[],
            })),
          },
        ]
      : []),
    { name: 'contact', title: 'Contact', summary: 'Contact information', view: 'contact', sections: [] },
  ],
};

function build(d: Draft, parent?: FsNode): FsNode {
  const path = parent ? `${parent.path === '/' ? '' : parent.path}/${d.name}` : '/';
  const node: FsNode = { ...d, path, parent, children: [] };
  node.children = (d.children ?? []).map(c => build(c, node));
  return node;
}

export const root: FsNode = build(draft);

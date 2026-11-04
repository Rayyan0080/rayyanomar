/**
 * The site as a directory tree.
 *
 * Content lives in src/data; this module turns it into FsNodes (one per
 * directory, each with its own page) and provides path resolution for the
 * terminal and the router. Navigation logic never needs to know what kind of
 * content a directory holds.
 */
import type {
  Assignment,
  Block,
  Course,
  Experience,
  Field,
  Lab,
  Link,
  Project,
  RepoInfo,
  Section,
  Topic,
} from '../types';
import { experience } from '../data/experience';
import { courses } from '../data/courses';
import { projectCategories, projects } from '../data/projects';
import { interests } from '../data/interests';
import { certifications } from '../data/certifications';
import githubData from '../data/github.json';

export interface FsNode {
  /** Directory name ('' for the root). */
  name: string;
  title: string;
  /** One-line description shown by `ls`. */
  summary: string;
  /** Absolute path, e.g. '/courses/ITI1121' ('/' for the root). */
  path: string;
  sections: Section[];
  /** Pages with a hand-written layout instead of sections. */
  view?: 'home' | 'contact';
  children: FsNode[];
  parent?: FsNode;
}

type Draft = Omit<FsNode, 'path' | 'children' | 'parent'> & { children?: Draft[] };

const github = githubData as Record<string, RepoInfo>;

// ------------------------------------------------------------ section helpers

/** A section whose body is `value`, or a placeholder naming what is missing. */
function text(heading: string, value: string | undefined, missing: string): Section {
  return { heading, body: [value ?? { todo: missing }] };
}

function list(heading: string, items: string[] | undefined, missing: string): Section {
  return { heading, body: [items?.length ? { list: items } : { todo: missing }] };
}

/** Like `list`, but omitted entirely when there is nothing to show. */
function optionalList(heading: string, items: string[] | undefined): Section[] {
  return items?.length ? [{ heading, body: [{ list: items }] }] : [];
}

function links(heading: string, items: Link[] | undefined, missing?: string): Section[] {
  if (items?.length) return [{ heading, body: [{ links: items }] }];
  return missing ? [{ heading, body: [{ todo: missing }] }] : [];
}

function note(value: string | undefined): Section[] {
  return value ? [{ heading: 'Note', body: [value] }] : [];
}

// ----------------------------------------------------------------- experience

function experienceNode(e: Experience, detailed: boolean): Draft {
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

// -------------------------------------------------------------------- courses

function assignmentNode(a: Assignment): Draft {
  return {
    name: a.slug,
    title: a.name,
    summary: a.objective ?? a.name,
    sections: [
      { heading: 'Assignment', body: [{ fields: [['name', a.name], ['number', a.number]] }] },
      text('Objective', a.objective, 'Objective of the assignment'),
      text('Problem statement', a.problem, 'Problem the assignment asked to solve'),
      list('Requirements', a.requirements, 'Requirements of the assignment'),
      text('Approach and methodology', a.approach, 'How the problem was approached'),
      list('Technologies and tools', a.tools, 'Languages and tools used'),
      list('My implementation and contributions', a.implementation, 'What I implemented'),
      text('Results and learning outcomes', a.results, 'Results and what I learned'),
      ...links('Source code and reports', a.links, 'Links to source code or reports'),
      ...note(a.note),
    ],
  };
}

function labNode(l: Lab): Draft {
  return {
    name: l.slug,
    title: l.name,
    summary: l.objective ?? l.name,
    sections: [
      { heading: 'Lab', body: [{ fields: [['name', l.name], ['number', l.number]] }] },
      text('Objective', l.objective, 'Objective of the lab'),
      list('Concepts covered', l.concepts, 'Concepts the lab covered'),
      list('Equipment, software and tools', l.tools, 'Equipment and software used'),
      list('Procedures performed', l.procedure, 'Steps carried out in the lab'),
      list('My work and contributions', l.work, 'What I did in this lab'),
      text('Results and findings', l.results, 'Results and findings'),
      list('Skills developed', l.skills, 'Skills developed'),
      ...links('Links', l.links),
      ...note(l.note),
    ],
  };
}

function collectionNode(slug: string, title: string, items: Draft[], course: string): Draft {
  return {
    name: slug,
    title: `${course} ${title}`,
    summary: items.length ? `${items.length} ${title.toLowerCase()}` : `No ${title.toLowerCase()} recorded yet`,
    sections: items.length ? [] : [{ heading: title, body: [{ todo: `${title} for ${course}` }] }],
    children: items,
  };
}

function courseNode(c: Course): Draft {
  const description: Block[] = [c.description ?? { todo: 'Official course description (uOttawa course catalogue)' }];
  if (c.description && c.descriptionSource) description.push(`Source: ${c.descriptionSource}`);
  return {
    name: c.code,
    title: `${c.code} - ${c.name}`,
    summary: c.name,
    sections: [
      { heading: 'Course', body: [{ fields: [['code', c.code], ['name', c.name]] }] },
      { heading: 'Description', body: description },
      list('Topics covered', c.topics, 'Topics covered in the course'),
      list('Technical concepts learned', c.concepts, 'Technical concepts learned'),
      list('Skills developed', c.skills, 'Skills developed'),
      text('Summary of my work', c.summary, 'Summary of my work in the course'),
    ],
    children: [
      collectionNode('assignments', 'Assignments', (c.assignments ?? []).map(assignmentNode), c.code),
      collectionNode('labs', 'Labs', (c.labs ?? []).map(labNode), c.code),
      ...(c.other ?? []).map(o => collectionNode(o.slug, o.title, o.items.map(assignmentNode), c.code)),
    ],
  };
}

// ------------------------------------------------------------------- projects

function projectNode(p: Project): Draft {
  const repo = p.repo ? github[p.repo] : undefined;
  const demo = p.demo ?? (repo?.pagesUrl || repo?.homepage || undefined);
  const technologies = [...(p.technologies ?? [])];
  for (const lang of repo?.languages ?? []) {
    if (!technologies.some(t => t.toLowerCase().includes(lang.toLowerCase()))) technologies.push(lang);
  }

  const linkFields: Field[] = [
    ['repository', repo ? { label: repo.url, href: repo.url } : 'Not public'],
    ['live demo', demo ? { label: demo, href: demo } : 'None'],
  ];
  if (repo) {
    linkFields.push(['created', repo.createdAt], ['updated', repo.updatedAt]);
    if (repo.languages.length) linkFields.push(['languages', repo.languages.join(', ')]);
  }

  return {
    name: p.slug,
    title: p.name,
    summary: p.summary,
    sections: [
      { heading: 'Overview', body: [p.overview, ...(p.year ? [`Year: ${p.year}`] : [])] },
      text('Problem being solved', p.problem, 'The problem this project addresses'),
      list('Main features', p.features, 'Main features'),
      list('Technologies used', technologies, 'Technologies used'),
      list('Architecture and implementation', p.architecture, 'How the project is structured'),
      list('My contributions', p.contributions, 'My role and contributions'),
      list('Challenges', p.challenges, 'Challenges encountered and how they were handled'),
      ...optionalList('Achievements', p.achievements),
      { heading: 'Links', body: [{ fields: linkFields }] },
      ...links('Related', p.related),
    ],
  };
}

// ------------------------------------------------------------------ interests

function topicNode(t: Topic): Draft {
  return { name: t.slug, title: t.title, summary: t.summary, sections: t.sections, children: t.children?.map(topicNode) };
}

// ---------------------------------------------------------------------- tree

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
          body: ['Software Engineering (Co-op) courses at the University of Ottawa. Each course has assignments/ and labs/ directories.'],
        },
      ],
      children: courses.map(courseNode),
    },
    {
      name: 'interests',
      title: 'Interests',
      summary: 'Outdoors, anime, movies, motorsports, photography, technology',
      sections: [],
      children: interests.map(topicNode),
    },
    {
      name: 'certifications',
      title: 'Certifications',
      summary: 'Certifications',
      sections: certifications.length
        ? certifications.map(c => ({
            heading: c.name,
            body: [{ fields: [['issuer', c.issuer], ['date', c.date], ['verify', c.credentialUrl ? { label: c.credentialUrl, href: c.credentialUrl } : undefined]] }],
          }))
        : [{ heading: 'Certifications', body: ['No certifications listed yet.'] }],
    },
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

// ---------------------------------------------------------------- navigation

/** Prompt-style label: '~' for the root, '~/courses/ITI1121' below it. */
export function displayPath(node: FsNode): string {
  return node.path === '/' ? '~' : `~${node.path}`;
}

/** Find a child by name, ignoring case and a trailing slash. */
function child(node: FsNode, name: string): FsNode | undefined {
  const n = name.toLowerCase();
  return node.children.find(c => c.name.toLowerCase() === n);
}

/**
 * Resolve a path typed in the terminal (or a URL path) against `cwd`.
 * Supports absolute paths (/x, ~/x), relative paths, '.', '..' and '~'.
 */
export function resolve(cwd: FsNode, input: string): FsNode | null {
  let path = input.trim();
  let node = cwd;
  if (path === '~' || path.startsWith('~/')) {
    node = root;
    path = path.slice(1);
  } else if (path.startsWith('/')) {
    node = root;
  }
  for (const seg of path.split('/')) {
    if (!seg || seg === '.') continue;
    if (seg === '..') {
      node = node.parent ?? node;
      continue;
    }
    const next = child(node, decodeURIComponent(seg));
    if (!next) return null;
    node = next;
  }
  return node;
}

/** Look up the node for a router pathname. */
export function nodeForPathname(pathname: string): FsNode | null {
  return resolve(root, pathname || '/');
}

/**
 * Tab completion for a partial path argument. Returns the completed argument
 * and, when several names match, the candidates to show.
 */
export function completePath(cwd: FsNode, partial: string): { value: string; options: string[] } {
  const slash = partial.lastIndexOf('/');
  const dirPart = slash >= 0 ? partial.slice(0, slash + 1) : '';
  const prefix = (slash >= 0 ? partial.slice(slash + 1) : partial).toLowerCase();
  const dir = dirPart ? resolve(cwd, dirPart) : cwd;
  if (!dir) return { value: partial, options: [] };

  const names = [
    ...(prefix === '' || '..'.startsWith(prefix) ? (dir.parent && prefix.startsWith('.') ? ['..'] : []) : []),
    ...dir.children.map(c => c.name).filter(n => n.toLowerCase().startsWith(prefix)),
  ];
  if (names.length === 0) return { value: partial, options: [] };
  if (names.length === 1) return { value: `${dirPart}${names[0]}/`, options: [] };

  // Extend to the longest common prefix, keeping the first match's casing.
  let common = names[0];
  for (const n of names) {
    let i = 0;
    while (i < common.length && i < n.length && common[i].toLowerCase() === n[i].toLowerCase()) i++;
    common = common.slice(0, i);
  }
  const value = common.length > prefix.length ? `${dirPart}${common}` : partial;
  return { value, options: value === partial ? names : [] };
}

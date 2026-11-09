/** Turns projects from data/projects.ts into directories, adding GitHub metadata. */
import type { Field, Project, RepoInfo } from '../types';
import type { Draft } from './FsNode';
import { links, list, optionalList, text } from './sections';
import githubData from '../data/github.json';

const github = githubData as Record<string, RepoInfo>;

export function projectNode(p: Project): Draft {
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
      ...optionalList('Technical specifications', p.specs),
      { heading: 'Links', body: [{ fields: linkFields }] },
      ...links('Related', p.related),
    ],
  };
}

/** Turns projects from data/projects/ into directories, adding GitHub metadata. */
import type { Field, Project, RepoInfo } from '../types';
import type { Draft } from './FsNode';
import { optionalList, optionalText } from './sections';
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
      ...optionalText('Problem being solved', p.problem),
      ...optionalList('Main features', p.features),
      ...optionalList('Technologies used', technologies),
      ...optionalList('Architecture and implementation', p.architecture),
      ...optionalList('My contributions', p.contributions),
      ...optionalList('Challenges', p.challenges),
      ...optionalList('Achievements', p.achievements),
      ...optionalList('Technical specifications', p.specs),
      ...(p.sections ?? []),
      { heading: 'Links', body: [{ fields: linkFields }, ...(p.related?.length ? [{ links: p.related }] : [])] },
    ],
  };
}

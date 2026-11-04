#!/usr/bin/env node
/**
 * Refreshes src/data/github.json with metadata for the owner's PUBLIC GitHub
 * repositories, using the GitHub CLI's existing login (`gh auth login`).
 *
 * The site reads this file at build time, so visitors never trigger GitHub API
 * requests. Private repositories and forks are skipped: nothing about them is
 * written. Run with `npm run sync:github`, review the diff, then commit.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const OWNER = 'Rayyan0080';
const OUT = new URL('../src/data/github.json', import.meta.url);

// stderr is captured, not printed: a missing Pages site is an expected 404.
const gh = (...args) =>
  JSON.parse(execFileSync('gh', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }));

const repos = gh(
  'repo', 'list', OWNER,
  '--visibility', 'public',
  '--source',
  '--limit', '200',
  '--json', 'name,description,url,homepageUrl,createdAt,updatedAt,repositoryTopics,visibility',
);

const out = {};
for (const r of repos.sort((a, b) => a.name.localeCompare(b.name))) {
  if (r.visibility !== 'PUBLIC') continue;
  const languages = Object.entries(gh('api', `repos/${OWNER}/${r.name}/languages`))
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang);
  let pagesUrl = '';
  try {
    pagesUrl = gh('api', `repos/${OWNER}/${r.name}/pages`).html_url ?? '';
  } catch {
    // No GitHub Pages site for this repository.
  }
  out[r.name] = {
    name: r.name,
    description: r.description ?? '',
    url: r.url,
    homepage: r.homepageUrl ?? '',
    pagesUrl,
    languages,
    topics: (r.repositoryTopics ?? []).map(t => t.name),
    createdAt: r.createdAt.slice(0, 10),
    updatedAt: r.updatedAt.slice(0, 10),
  };
}

writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${Object.keys(out).length} public repositories to src/data/github.json`);

/**
 * Projects, grouped into categories. Each project appears exactly once.
 *
 * `repo` names a public repository under github.com/Rayyan0080; its URL,
 * languages, dates and GitHub Pages demo are read from github.json, which
 * `npm run sync:github` regenerates. Descriptions here come from each
 * repository's README and source, or from the résumé for projects without a
 * public repository.
 */
import type { Project } from '../../types';
import { softwareDevelopment } from './softwareDevelopment';
import { personalProjects } from './personalProjects';
import { universityProjects } from './universityProjects';

export { projectCategories } from './categories';

/** All projects, in the order they are listed. */
export const projects: Project[] = [...softwareDevelopment, ...personalProjects, ...universityProjects];

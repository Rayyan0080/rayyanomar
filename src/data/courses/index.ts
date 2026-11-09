/**
 * University of Ottawa courses, BASc Software Engineering (Co-op).
 * Scope (per Rayyan): ITI, CSI and SEG courses, showing only assignments and labs.
 *
 * Sources:
 *  - ITI1120, ITI1121 and CSI2110: the README of each course repository on GitHub.
 *  - SEG courses: Rayyan's own submissions and GitHub repos.
 *  - Course descriptions: uOttawa catalogue or the course syllabus, as noted in
 *    each descriptionSource. Technical specifications come from the code itself
 *    (file and line counts, entry points, build files and dependencies).
 */
import type { Course } from '../../types';
import { firstYear } from './firstYear';
import { secondYear } from './secondYear';
import { thirdYear } from './thirdYear';

/** All courses, in the order they appear under /courses. */
export const courses: Course[] = [...firstYear, ...secondYear, ...thirdYear];

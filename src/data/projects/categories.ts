/** The project categories: each becomes a directory under /projects. */
import type { ProjectCategory } from '../../types';

export const projectCategories: { slug: ProjectCategory; summary: string; description: string }[] = [
  {
    slug: 'software-development',
    summary: 'Hackathon and independent software builds',
    description: 'Software I built outside coursework, mostly at hackathons.',
  },
  {
    slug: 'engineering',
    summary: 'Engineering design and hardware projects',
    description: 'Engineering projects outside pure software. Research work at NRC is under /experience/nrc.',
  },
  {
    slug: 'personal-projects',
    summary: 'Things built for myself or my community',
    description: 'Side projects built out of personal interest.',
  },
  {
    slug: 'university-projects',
    summary: 'Course projects with public repositories',
    description: 'Course work with a public repository and, where available, a live demo. Course context is under /courses.',
  },
];

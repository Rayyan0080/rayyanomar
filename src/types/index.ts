/**
 * Content types. Data files in src/data describe *what* is on the site using
 * these types; src/fs turns them into the navigable directory tree, and
 * src/pages/NodePage renders any directory. Optional fields that are
 * left out are shown as "not provided yet" placeholders, so a missing fact is
 * visible instead of silently skipped or invented.
 */

/** A link. Hrefs starting with "/" are directories inside the site. */
export interface Link {
  label: string;
  href: string;
}

/** Field label paired with a plain value or a link. */
export type Field = [label: string, value: string | Link | undefined];

/** One block of page content. */
export type Block =
  | string
  | { list: string[] }
  | { fields: Field[] }
  | { links: Link[] }
  /** Placeholder for information the site owner still needs to supply. */
  | { todo: string }
  | { viewOnly: ViewOnlyImage };

/** An image shown view-only (no download, right-click, drag or print), e.g. a research poster. */
export interface ViewOnlyImage {
  /** Path inside public/, e.g. 'assets/nrc-poster.webp'. */
  src: string;
  alt: string;
  caption: string;
}

export interface Section {
  heading: string;
  body: Block[];
}

// ---------------------------------------------------------------- experience

export interface Experience {
  slug: string;
  /** One-line summary shown by `ls`. */
  summary: string;
  organization: string;
  organizationDescription?: string;
  role?: string;
  dates?: string;
  location?: string;
  responsibilities?: string[];
  skills?: string[];
  contributions?: string[];
  achievements?: string[];
  links?: Link[];
  /** Proof of work shown view-only in the Links section. */
  proof?: ViewOnlyImage[];
  /** Extra sections specific to this entry. */
  sections?: Section[];
  /** Sub-directories, e.g. individual hackathons. */
  children?: Experience[];
}

// ------------------------------------------------------------------- courses

export interface Assignment {
  slug: string;
  name: string;
  number?: string;
  objective?: string;
  problem?: string;
  requirements?: string[];
  approach?: string;
  tools?: string[];
  implementation?: string[];
  concepts?: string[];
  /** Technical specifications: language, size, entry points, build, libraries. */
  specs?: string[];
  results?: string;
  /** Typical program output (from the repository README). */
  output?: string[];
  links?: Link[];
  /** Caveats about the source material, e.g. how a number was inferred. */
  note?: string;
}

export interface Lab {
  slug: string;
  name: string;
  number?: string;
  objective?: string;
  concepts?: string[];
  tools?: string[];
  procedure?: string[];
  work?: string[];
  results?: string;
  skills?: string[];
  /** Implementation files (from the repository README). */
  files?: string[];
  specs?: string[];
  output?: string[];
  links?: Link[];
  note?: string;
}

export interface Course {
  /** Course code without spaces, used as the directory name (e.g. ITI1121). */
  code: string;
  name: string;
  description?: string;
  /** Where the description comes from, shown under it. */
  descriptionSource?: string;
  /** Techniques used across the course. */
  concepts?: string[];
  specs?: string[];
  /** Course repository. */
  links?: Link[];
  assignments?: Assignment[];
  labs?: Lab[];
}

// ------------------------------------------------------------------ projects

export type ProjectCategory =
  | 'software-development'
  | 'engineering'
  | 'personal-projects'
  | 'university-projects';

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  /** GitHub repository name under the owner account; metadata comes from github.json. */
  repo?: string;
  year?: string;
  overview: string;
  problem?: string;
  features?: string[];
  technologies?: string[];
  architecture?: string[];
  contributions?: string[];
  challenges?: string[];
  achievements?: string[];
  specs?: string[];
  demo?: string;
  /** Related directories elsewhere on the site. */
  related?: Link[];
}

/** Public repository metadata written by scripts/sync-github.mjs. */
export interface RepoInfo {
  name: string;
  description: string;
  url: string;
  homepage: string;
  pagesUrl: string;
  languages: string[];
  topics: string[];
  createdAt: string;
  updatedAt: string;
}

// ------------------------------------------------------------- other content

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
  /** Working directory shown in the prompt for echoed input lines. */
  path?: string;
}

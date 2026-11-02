export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Interest {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'info' | 'system';
  content: string;
  prompt?: string;
}

export type NavigationPage = 'home' | 'about' | 'work' | 'research' | 'ventures' | 'ecosystem' | 'cv' | 'contact';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  architecture: string[];
  techStack: string[];
  process: string[];
  results: string[];
  learnings: string[];
  nextSteps: string[];
  tags: string[];
  status: 'Research' | 'Building' | 'Experiment' | 'Active';
  featured: boolean;
}

export interface ResearchNote {
  id: string;
  noteNumber: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  keyTakeaways: string[];
  category: 'AI' | 'AUTOMATION' | 'FINANCE' | 'MARKETS' | 'QUANT' | 'MACRO' | 'BUSINESS' | 'TECHNOLOGY' | 'STRATEGY';
  date: string;
  readTime: string;
  tags: string[];
  codeSnippet?: string;
}

export interface ExpertiseCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  skills: string[];
  iconName: string;
}

export interface Venture {
  id: string;
  name: string;
  label: string;
  subtitle: string;
  description: string;
  highlights: string[];
  status: string;
  linkText: string;
  url?: string;
}

export interface EcosystemDomain {
  id: string;
  pillar: string;
  brand: string;
  tagline: string;
  description: string;
  focusArea: string;
  topics: string[];
  color: string;
  active: boolean;
  instagramUrl?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Future Ambition';
  tags: string[];
}

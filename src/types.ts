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

export interface ResearchPaperSection {
  id: string;
  number: string; // e.g. "1.0", "2.1"
  title: string;
  content: string;
  equation?: {
    latex: string;
    description: string;
  };
  table?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  figure?: {
    id: string;
    title: string;
    caption: string;
    dataPoints?: { label: string; value: number; baseline?: number }[];
  };
  codeSnippet?: {
    language: string;
    filename?: string;
    code: string;
  };
  callout?: {
    title: string;
    text: string;
  };
}

export interface ResearchPaperReference {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
}

export interface ResearchPaper {
  id: string;
  paperNumber: string; // e.g. "PUB-2026-001"
  noteNumber?: string; // backwards compatibility
  doi: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  affiliation: string;
  category: string;
  date: string;
  version: string;
  status: 'Published' | 'Peer Reviewed' | 'Working Paper' | 'Pre-Print' | 'Technical Monograph';
  readTime: string;
  excerpt?: string;
  abstract: string;
  keywords: string[];
  keyTakeaways: string[];
  
  // Academic Paper Sections
  introduction: string;
  literatureReview: string;
  problemStatement: string;
  methodology: string;
  analysisAndResults: ResearchPaperSection[];
  discussion: string;
  conclusion: string;
  
  references: ResearchPaperReference[];
  appendix?: {
    title: string;
    content: string;
    codeSnippet?: {
      language: string;
      code: string;
    };
  };
  
  tags: string[];
}

export type ResearchNote = ResearchPaper;

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

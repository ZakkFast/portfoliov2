export type ProjectLabel = string;

export interface ProjectCaseStudy {
  problem: string[];
  howItWorks: string[];
  decisions: string[];
  challenges: string[];
  testing?: string[];
  nextSteps: string[];
}

export interface ProjectType {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  projectLabels: ProjectLabel[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
}

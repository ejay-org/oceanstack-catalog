export interface OpenSource {
  id: string;
  name: string;
  description: string;
  license: string;
  githubUrl: string;
  stars: number;
  startYear: number;
  language: string;
  technologies: string[];
  category: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export type CategoryId =
  | "itam"
  | "itom"
  | "itsm"
  | "analysis"
  | "ai-automation";

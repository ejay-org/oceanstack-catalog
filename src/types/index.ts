export interface OpenSource {
  id: string;
  name: string;
  description: string;
  license: string;
  githubUrl: string;
  stars: number;
  startYear: number;
  language: string;
  features: string[]; // 제공하는 기능들
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  category: string;
  requiredFeatures: string[]; // 이 모듈이 요구하는 기능들
}

export type CategoryId =
  | "itam"
  | "itom"
  | "itsm"
  | "analysis"
  | "ai-automation";

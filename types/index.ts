export interface Project {
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  stack: string[];
  url: string;
  githubUrl?: string;
  gallery?: string[];
  video?: string;
}

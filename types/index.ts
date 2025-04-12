import { LucideIcon } from "lucide-react";

export interface Project {
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  logo: string;
  stack: string[];
  url: string;
  githubUrl?: string;
  gallery?: string[];
  video?: string;
}

export interface NavbarLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface SocialLink {
  title: string;
  href: string;
  icon: LucideIcon;
  mobile: string;
}

export interface Stack {
  title: string;
  icon: LucideIcon;
}

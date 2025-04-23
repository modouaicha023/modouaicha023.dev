import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  type: string;
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

export type CarouselItem = {
  url: string | StaticImport;
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};

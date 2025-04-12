import { projects } from "@/constants";
import { ExternalLink, Github } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mes Projects | Développeur Full Stack",
  description:
    "Portfolio de Modou Aicha Diop, développeur full stack spécialisé en React, Next.js et NestJS. Découvrez mes projets, compétences et services en développement web et mobile au Sénégal.",
  openGraph: {
    title: "Modou Aicha Diop | Développeur Full Stack au Sénégal",
    description:
      "Découvrez mon portfolio en tant que développeur full stack spécialisé en React, Next.js et NestJS. Je crée des solutions web et mobiles innovantes adaptées aux besoins des entreprises et startups.",
    url: "https://www.modouaicha023.dev",
    siteName: "Modou Aicha Diop - Portfolio",
    images: [
      {
        url: "https://www.modouaicha023.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Modou Aicha Diop - Développeur Full Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-lg tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          Projects
        </h1>
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas on how it can be improved.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 mt-8">
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={index}
            className="flex gap-x-4 items-center bg-[#131212] py-2 px-4 rounded-3xl border border-transparent hover:border-white box-border transition"
          >
            <Image
              src={project.logo}
              className="w-24 h-24 rounded-lg"
              width={1280}
              height={1280}
              alt={project.name + "| Modou Aicha Diop | @modouaicha023"}
            />

            <div className="flex flex-col p-4 w-full sm:max-w-sm">
              <h2 className="font-bold text-xl">{project?.name}</h2>
              <div className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed line-clamp-2">
                {project?.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

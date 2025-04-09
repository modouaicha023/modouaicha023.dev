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
    <main className="grid grid-cols-3 gap-3 p-10">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col border p-2 rounded-3xl">
          <div className="relative">
            <h2 className="">{project?.name}</h2>
            <div className=""></div>
            <Image
              src={project?.coverImage}
              className="w-[300px] h-[200px] "
              width={400}
              height={400}
              alt={project.name + "| Modou Aicha Diop | @modouaicha023"}
            />
          </div>

          <div className="">
            <div className="">
              <div className="flex gap-2">
                {project?.stack?.map((tech, index) => (
                  <span key={index} className="text-red-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex">
                <Link href={project?.githubUrl || "#"} target="_blank">
                  <Github size={16} />
                </Link>
                <Link href={project?.url || "#"} target="_blank">
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            <div className="">{project?.description}</div>
          </div>
        </div>
      ))}
    </main>
  );
}

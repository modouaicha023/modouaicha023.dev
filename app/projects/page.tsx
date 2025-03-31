import Projects from "@/components/sections/projects";
import { Metadata } from "next";

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
    <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Modou Aicha Diop</h1>
      <Projects />
    </main>
  );
}

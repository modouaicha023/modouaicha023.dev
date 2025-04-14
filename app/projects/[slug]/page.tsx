import { ProjectJsonLd } from "@/components/json-ld";
import { projects } from "@/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ProjectDetail from "@/components/project-header";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Aucune description disponible pour ce projet.",
    };
  }

  return {
    title: project.name,
    description: project?.description?.substring(0, 160),
    openGraph: {
      title: project.description,
      description: project?.description?.substring(0, 160),
      url: `https://www.modouaicha023.dev/projects/${params.slug}`,
      images: [
        {
          url: project.logo || "/logo.png",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mdxPath = path.resolve(`content/projects/${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    notFound();
  }

  let ProjectMdx;

  try {
    const mdxModule = await import(`@/content/projects/${slug}.mdx`);
    ProjectMdx = mdxModule.default;
  } catch (error) {
    console.error(error);
    notFound();
  }

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="prose max-w-xl w-full flex flex-col dark:prose-invert">
        <ProjectJsonLd project={project} />
        <ProjectDetail project={project} />
        <ProjectMdx project={project} />
      </div>
    </div>
  );
}

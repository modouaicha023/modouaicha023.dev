import { ProjectJsonLd } from "@/components/json-ld";
import { projects } from "@/constants";
import { Project } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch project: ${res.statusText}`);
  }
  const project: Project = await res.json();
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
    const { default: MdxComponent } = await import(
      `@/content/projects/${slug}.mdx`
    );
    ProjectMdx = MdxComponent;
  } catch (error) {
    console.error(error);
    notFound();
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch project: ${res.statusText}`);
  }
  const project: Project = await res.json();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="prose max-w-xl prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg w-full flex flex-col  dark:prose-invert">
        <ProjectJsonLd project={project} />
        <ProjectMdx project={project} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const slugs = projects.map((project) => {
    return { slug: project.slug };
  });
  return slugs;
}

export const dynamicParams = false;

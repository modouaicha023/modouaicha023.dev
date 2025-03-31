import { ProjectJsonLd } from "@/components/json-ld";
import ProjectDetail from "@/components/project-detail";
import { Project } from "@/types";
import { Metadata } from "next";

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
      title: "project non trouvée",
    };
  }

  return {
    title: project.name,
    description:
      project?.description?.substring(0, 160) ||
      "Découvrez des destinations inoubliables et vivez des expériences exceptionnelles.",
    openGraph: {
      title: project.description,
      description:
        project?.description?.substring(0, 160) ||
        "Découvrez des destinations inoubliables et vivez des expériences exceptionnelles.",
      url: `https://www.lac-rose-project.com/projects/${params.slug}`,
      images: [
        {
          url: project.coverImage || "/logo.png",
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch project: ${res.statusText}`);
  }
  const project: Project = await res.json();
  return (
    <>
      <ProjectJsonLd project={project} />
      <ProjectDetail project={project} />
    </>
  );
}

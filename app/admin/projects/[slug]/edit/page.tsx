// app/admin/projects/[slug]/edit/page.tsx
import ProjectEditor from "@/components/project-editor";
import { notFound } from "next/navigation";
import { projects } from "@/constants";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectEditor slug={slug} />;
}

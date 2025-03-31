import { Project } from "@/types";

export function ProjectJsonLd({ project }: { project: Project }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.url || "https://github.com/modouaicha023",
    codeRepository: project?.githubUrl || "https://github.com/modouaicha023",
    image: project.coverImage,
    programmingLanguage: project.stack,
    author: {
      "@type": "Person",
      name: "Modou Aicha Diop",
      url: "https://www.modouaicha023.dev",
    },
    thumbnailUrl: project.coverImage,
    screenshot: project.gallery,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

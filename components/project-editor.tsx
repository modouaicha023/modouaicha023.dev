// components/project-editor.tsx
"use client";

import { useState, useEffect } from "react";
import MDXEditorComponent from "@/components/mdx-editor";
import { useRouter } from "next/navigation";
import { projects } from "@/constants";

export default function ProjectEditor({ slug }: { slug: string }) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Charger le contenu MDX initial
    const fetchMdxContent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${slug}/content`);
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Erreur lors du chargement du contenu:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMdxContent();
  }, [slug]);

  const handleSave = async () => {
    try {
      await fetch(`/api/projects/${slug}/content`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      router.push(`/projects/${slug}`);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement:", error);
    }
  };

  if (!project) return <div>Projet non trouvé</div>;
  if (isLoading) return <div>Chargement...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Éditer {project.name}</h1>
      <MDXEditorComponent initialContent={content} onChange={setContent} />
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Enregistrer
        </button>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

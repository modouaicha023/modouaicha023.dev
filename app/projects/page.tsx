"use client";

import { ProjectJsonLd } from "@/components/json-ld";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto ">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <>
            <ProjectJsonLd project={project} />
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className="group flex items-start gap-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={project.name + " | Modou Aicha Diop"}
                  width={96}
                  height={96}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-sm sm:text-xl font-semibold text-zinc-900 dark:text-white group-hover:underline">
                  {project.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 sm:line-clamp-2 mt-2">
                  {project.description}
                </p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
}

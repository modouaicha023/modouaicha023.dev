import { ProjectJsonLd } from "@/components/json-ld";
import Works from "@/components/sections/works";
import { projects } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Projects | Full Stack Developer",
  description:
    "Explore my portfolio and see the projects I’ve worked on as a Full Stack Developer in Senegal.",
  openGraph: {
    title: "Modou Aicha Diop | Full Stack Developer from Senegal",
    description:
      "Discover the skills and projects of Modou Aicha Diop, a Full Stack Developer based in Senegal.",
    url: "https://www.modouaicha023.dev",
    siteName: "Modou Aicha Diop - Portfolio",
    images: [
      {
        url: "https://www.modouaicha023.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Modou Aicha Diop's Portfolio - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-800 dark:text-white mb-4">
          Personnal
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.type === "Personal")
            .map((project, index) => (
              <div key={index}>
                <ProjectJsonLd project={project} />
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-start gap-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 hover:border-gray-400 dark:border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-gray-400"
                  tabIndex={0}
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
                    <h2>
                      <span className="text-sm sm:text-xl font-semibold text-zinc-900 dark:text-white group-hover:underline">
                        {project.name}
                      </span>
                      {/* <span className=" ml-2 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {project.type}
                      </span> */}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 sm:line-clamp-2 mt-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-800 dark:text-white mb-4">
          Freelance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.type === "Freelance")
            .map((project, index) => (
              <div key={index}>
                <ProjectJsonLd project={project} />
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-start gap-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 hover:border-gray-400 dark:border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-gray-400"
                  tabIndex={0}
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={project.logo}
                      alt={project.name + " | Modou Aicha Diop"}
                      width={1280}
                      height={1280}
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <h2>
                      <span className="text-sm sm:text-xl font-semibold text-zinc-900 dark:text-white group-hover:underline">
                        {project.name}
                      </span>
                      {/* <span className=" ml-2 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {project.type}
                      </span> */}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 sm:line-clamp-2 mt-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <Works />
    </section>
  );
}

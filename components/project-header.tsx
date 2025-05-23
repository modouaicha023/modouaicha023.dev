import Link from "next/link";
import React from "react";
import { ExternalLink, MoveLeft } from "lucide-react";
import { Project } from "@/types";
import { Icons } from "./icons";
import Image from "next/image";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col mb-6 sm:mb-0">
      <div className="flex items-center justify-between w-full  gap-x-4">
        <Link
          href="/projects"
          className="sm:hidden px-4 w-fit py-2 rounded-lg dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-pink-200 bg-pink-100  
          border border-zinc-100 hover:border-gray-400 dark:border-zinc-800 focus:outline-none focus:border-gray-400"
          tabIndex={0}
        >
          <MoveLeft />
        </Link>
        <Image
          src={project.logo}
          alt={project.name + " Project Modou Aicha Diop modouaicha023"}
          width={96}
          height={96}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
        />
      </div>
      <div className="flex items-center gap-x-4 ">
        {project?.githubUrl !== "#" && (
          <Link
            href={project?.githubUrl || "#"}
            target={project?.githubUrl === "#" ? "_self" : "_blank"}
            className="flex justify-center sm:text-start gap-x-2 items-center px-4 w-full py-2 rounded-lg dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-pink-200 bg-pink-100  
          border border-zinc-100 hover:border-gray-400 dark:border-zinc-800 focus:outline-none focus:border-gray-400"
            tabIndex={0}
          >
            <Icons.gitHub className="w-4 h-4" />
            Repo
          </Link>
        )}
        <Link
          href={project?.url || "#"}
          target={project?.githubUrl === "#" ? "_self" : "_blank"}
          className="w-full justify-center sm:text-start flex gap-x-2 items-center px-4 py-2 rounded-lg dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-pink-200 bg-pink-100 border border-zinc-100 hover:border-gray-400 dark:border-zinc-800 focus:outline-none focus:border-gray-400"
          tabIndex={0}
        >
          <ExternalLink className="w-4 h-4" />
          Live
        </Link>
      </div>
    </div>
  );
}

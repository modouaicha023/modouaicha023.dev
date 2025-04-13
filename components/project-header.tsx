import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { Icons } from "./icons";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col">
      <h2 className="">{project?.name}</h2>
      <div className="flex items-center gap-x-4 ">
        <Link
          href={project?.githubUrl || "#"}
          target="_blank"
          className="flex justify-center sm:text-start gap-x-2 items-center px-4 w-full py-2 rounded-lg dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-pink-200 bg-pink-100  
          border border-zinc-100 hover:border-gray-400 dark:border-zinc-800 focus:outline-none focus:border-gray-400"
        >
          <Icons.gitHub className="w-4 h-4" />
          Repo
        </Link>
        <Link
          href={project?.url || "#"}
          target="_blank"
          className="w-full justify-center sm:text-start flex gap-x-2 items-center px-4 py-2 rounded-lg dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-pink-200 bg-pink-100 border border-zinc-100 hover:border-gray-400 dark:border-zinc-800 focus:outline-none focus:border-gray-400"
        >
          <ExternalLink className="w-4 h-4" />
          Live
        </Link>
      </div>
    </div>
  );
}

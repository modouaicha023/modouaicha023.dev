import { projects } from "@/constants";
import React from "react";
import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-col gap-6 ">
          <h2 className="text-3xl sm:text-5xl text-center ">Projects</h2>
        </div>
        <div className=" flex flex-wrap justify-center gap-4">
          {projects.map((projectItem, index) => (
            <ProjectCard key={index} project={projectItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

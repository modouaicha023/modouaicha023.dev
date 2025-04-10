import React from "react";
import ScrambleText from "../scramble-text";
import { socialLinks } from "@/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row gap-4 justify-center items-center mx-auto">
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-lg tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          Software Developer, Freelancer & Tech Content Creator
        </h1>
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Hey, I'm <ScrambleText>Modou Aicha</ScrambleText> — a self-taught
          developer and freelancer passionate about building apps, crafting
          helpful dev content, and empowering others in tech.
        </p>
      </div>
      <div className="flex flex-col w-full items-start">
        <div className="flex w-full items-center justify-start gap-4">
          {socialLinks.map((social, i) => (
            <Link
              href={social.href}
              key={i}
              className="flex gap-x-1 items-center hover:underline hover:opacity-70"
            >
              <social.icon className="w-4 h-4" />
              <span className="text-sx">{social.title}</span>
            </Link>
          ))}
        </div>
        <p className="w-full underline">@modouaicha023 on all platform</p>
      </div>
    </section>
  );
}

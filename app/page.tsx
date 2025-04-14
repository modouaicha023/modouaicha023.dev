import Hero from "@/components/sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modou Aicha Diop | Full Stack Developer",
  description:
    "Portfolio of Modou Aicha Diop, a full stack developer specialized in React, Next.js, and NestJS. Explore my projects, skills, and services in web and mobile development in Senegal.",
  openGraph: {
    title: "Modou Aicha Diop | Full Stack Developer from Senegal",
    description:
      "Explore my portfolio as a full stack developer specializing in React, Next.js, and NestJS. I create innovative web and mobile solutions tailored to the needs of businesses and startups.",
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

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Projects /> */}
    </>
  );
}

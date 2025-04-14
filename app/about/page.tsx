import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me | Full Stack Developer",
  description:
    "Learn more about Modou Aicha Diop, a passionate Full Stack Developer based in Senegal. Discover his background, skills, and journey in web development.",
  openGraph: {
    title: "Modou Aicha Diop | Full Stack Developer in Senegal",
    description:
      "Explore the portfolio of Modou Aicha Diop, a Full Stack Developer from Senegal. Get to know his expertise, experiences, and projects.",
    url: "https://www.modouaicha023.dev",
    siteName: "Modou Aicha Diop - Portfolio",
    images: [
      {
        url: "https://www.modouaicha023.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Modou Aicha Diop - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <div className="flex items-center justify-center">soon...</div>;
}

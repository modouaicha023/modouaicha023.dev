import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Full Stack Developer",
  description:
    "Read insightful articles and tutorials by Modou Aicha Diop, a Full Stack Developer from Senegal. Stay updated with the latest trends in web development.",
  openGraph: {
    title: "Modou Aicha Diop | Full Stack Developer in Senegal",
    description:
      "Discover blog posts and resources shared by Modou Aicha Diop, covering programming, web technologies, and the journey of a developer in Senegal.",
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

export default function BlogPage() {
  return (
    <div>
      <h1>blog</h1>
    </div>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full Stack Developer",
  description:
    "Get in touch with Modou Aicha Diop, a Full Stack Developer based in Senegal. Whether it's a project idea, collaboration, or opportunity—let's connect!",
  openGraph: {
    title: "Modou Aicha Diop | Full Stack Developer in Senegal",
    description:
      "Reach out to Modou Aicha Diop for freelance work, tech collaborations, or professional inquiries in the field of web development.",
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

export default function ContactPage() {
  return <div className="flex items-center justify-center">soon...</div>;
}

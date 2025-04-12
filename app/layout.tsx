import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Exo_2({
  weight: ["400", "700"],
  variable: "--font-app",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modou Aicha Diop | Développeur Full Stack",
    template: "%s | Modou Aicha Diop",
  },
  description:
    "Portfolio de Modou Aicha Diop, développeur full stack spécialisé en React, Next.js et NestJS. Découvrez mes projets, compétences et services en développement web et mobile au Sénégal.",
  keywords: [
    "Modou Aicha Diop",
    "modouaicha023",
    "@modouaicha023",
    "modou aicha",
    "modou aicha diop",
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "Développeur Web",
    "Développeur Full Stack",
    "Développeur Mobile",
    "Développeur Backend",
    "Développeur Frontend",
    "Développeur JavaScript",
    "Développeur TypeScript",
    "Développeur React",
    "Développeur Next.js",
    "Développeur Node.js",
    "Développeur NestJS",
    "Développeur MongoDB",
    "Senegal",
    "Sénégal",
    "Galsen",
    "Galsen Dev",
    "Freelance Sénégal",
    "Freelance Developer Senegal",
    "Web Development Senegal",
    "Mobile Apps Senegal",
    "Application Mobile Sénégal",
    "Tech Senegal",
    "Startup Senegal",
    "Entreprise IT Senegal",
    "Développement Web Sénégal",
    "Développement Mobile Sénégal",
    "Création de Site Web Sénégal",
    "Développeur Freelance Sénégal",
    "Designer Freelance Sénégal",
    "Application de Gestion Senegal",
    "Application Web Sénégal",
    "Création de site web au Sénégal",
    "Développement d'applications au Sénégal",
    "Conception UI/UX Sénégal",
    "Développement sur mesure Sénégal",
    "Optimisation SEO Sénégal",
    "Freelance Web Developer Senegal",
    "Développement d’application mobile",
    "Web Design Senegal",
    "UX/UI Design Sénégal",
    "Agence Web Sénégal",
    "Développement Backend Sénégal",
    "Développement Frontend Sénégal",
    "Développement React Sénégal",
    "Développement Next.js Sénégal",
    "Développement Node.js Sénégal",
    "Développement SaaS Sénégal",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Jamstack Developer",
    "Web Performance Optimization",
    "Progressive Web Apps (PWA)",
    "Single Page Applications (SPA)",
    "Serverless Development",
    "Hackathon Senegal",
    "Tech Community Senegal",
    "Galsen Coding Challenge",
    "Galsen Tech",
    "Développeur Sénégalais",
    "Meetup Dev Sénégal",
    "Événements Tech Sénégal",
    "Communauté IT Sénégal",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://www.modouaicha023.dev.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Modou Aicha Diop | Développeur Full Stack au Sénégal",
    description:
      "Découvrez mon portfolio en tant que développeur full stack spécialisé en React, Next.js et NestJS. Je crée des solutions web et mobiles innovantes adaptées aux besoins des entreprises et startups.",
    url: "https://www.modouaicha023.dev",
    siteName: "Modou Aicha Diop - Portfolio",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.modouaicha023.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Modou Aicha Diop - Développeur Full Stack",
      },
    ],
    emails: ["modouaicha023@gmail.com", "modouaichadiop@gmail.com"],
    countryName: "Senegal",
    phoneNumbers: "+221781606189",
  },
  authors: { name: "Modou Aicha Diop", url: "https://www.modouaicha023.dev/" },
  twitter: {
    card: "summary_large_image",
    site: "@modouaicha023",
    title: "Modou Aicha Diop | Développeur Full Stack au Sénégal",
    description:
      "Développeur Full Stack spécialisé en React, Next.js et NestJS. Découvrez mes projets et services pour vos besoins en développement web et mobile.",
    images: ["https://www.modouaicha023.dev/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.variable} antialiased bg-[#FEF1FA] dark:bg-[#0A0A0A] text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-7xl mx-auto relative md:px-16">
            <Navbar />
          </div>
          <main className="max-w-7xl mx-auto relative mt-8 mb-20 md:px-16 px-6">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}

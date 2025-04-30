import CarouselSection from "@/components/carousel";
import SocialMedia from "@/components/social-media";
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
  return (
    <section className="flex flex-col xl:flex-row gap-8 justify-center items-center mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center mx-auto">
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold max-w-lg tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            {
              " I'm Modou Aicha Diop 🙋🏿‍♂️, a boy from Dakar 🇸🇳 building cool things."
            }
          </h1>
          <p className="text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {
              "I’m software developer based in Dakar, Senegal. I love building digital products that solve real problems and improve people’s lives. With a strong foundation in web technologies like React, TypeScript, and Node.js, I’ve worked on a variety of projects — from dynamic web apps to full-stack platforms — always with a focus on clean code, great user experience, and continuous learning."
            }
          </p>
          <p className="mt-3 text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {
              "When I’m not coding, you’ll probably find me deep into a manga 📖, catching up on the latest anime, or shooting hoops on the basketball court 🏀. These passions fuel my creativity and give me fresh perspectives when tackling challenges in tech. I believe in building things that are not only useful and impactful, but also inspired by the things that bring me joy😁."
            }
          </p>
        </div>
        <div className="flex flex-col w-full items-start max-w-2xl">
          <p className="w-full">
            <span className="tracking-wide underline">@modouaicha023</span> on
            all platforms
          </p>
          <SocialMedia />
        </div>
      </div>
      <div className="relative w-full xl:w-[350px] h-[400px] max-w-7xl">
        <CarouselSection />

        {/* <Image
          src="/mo.jpg"
          alt="Modou Aicha Diop"
          width={1280}
          height={1280}
          className="w-[500px] h-[520px] object-fill rounded-lg"
        /> */}
      </div>
    </section>
  );
}

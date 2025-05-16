import CarouselSection from "@/components/sections/carousel";
import SocialMedia from "@/components/social-media";
import { carouselItems } from "@/constants";
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
            {"Hi, I’m Modou Aicha Diop 🙋🏿‍♂️ from  🇸🇳  & i build cool stuff."}
          </h1>
          <p className="text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {
              "I’m a software developer in Dakar, Senegal. I love making digital solutions that actually help people."
            }
          </p>
          <p className="mt-3 text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {
              "When I’m not coding, I love reading manga 📖, watching anime, and playing basketball 🏀. These hobbies inspire me and spark fresh ideas for my projects."
            }
          </p>
        </div>
        <div className="flex flex-col w-full items-start max-w-2xl">
          <p className="w-full">
            Find me as{" "}
            <span className="tracking-wide underline">@modouaicha023</span> on
            all platforms.
          </p>
          <SocialMedia />
        </div>
      </div>
      <div className="relative w-full xl:w-[350px] h-[400px] max-w-7xl mx-auto">
        <CarouselSection images={carouselItems} />
      </div>
    </section>
  );
}

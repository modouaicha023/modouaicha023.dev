import { Project, NavbarLink } from "@/types";

export const projects: Project[] = [
  {
    name: "Lac Rose Excursion",
    slug: "lac-rose-excursion",
    coverImage: "/projects/lac-rose-excursion.png",
    stack: ["NextJS", "Tailwind CSS", "TypeScript"],
    description:
      "Lac Rose Excursion est un site web développé avec Next.js, Tailwind CSS, et TypeScript pour une entreprise d'excursions. Il permet de découvrir les excursions proposées et de réserver facilement en ligne.",
    url: "https://www.lac-rose-excursion.com/",
    githubUrl: "https://www.lac-rose-excursion.com/",
  },
  {
    name: "Game Of Life",
    slug: "game-of-life",
    coverImage: "/projects/game-of-life.png",
    stack: ["JavaScript", "HTML", "CSS"],
    description:
      "This is a game called Game of life challenge. The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
    url: "https://modouaicha023.github.io/GameOfLife",
    githubUrl: "https://github.com/modouaicha023/GameOfLife",
  },
  {
    name: "Galsen Mangas",
    slug: "galsen-mangas",
    coverImage: "/projects/galsen-mangas.png",
    stack: ["Next.JS", "TypeScript"],
    description:
      "An app offering free access to anime, manga, and novels, packed with features for a seamless and enjoyable experience.",
    url: "https://galsen-mangas.vercel.app",
    githubUrl: "https://github.com/modouaicha023/galsen-mangas",
  },
  {
    name: "Galsen Coding Challenge",
    slug: "galsen-coding-challenge",
    coverImage: "/projects/gcc.png",
    stack: ["Next.JS", "TypeScript", "MongoDB"],
    description:
      "This project aims to create a platform for coding challenges and collaboration within the Senegalese coding community. Users can participate in challenges, create their own, and engage in collaborative coding efforts.",
    url: "https://galsen-coding-challenge.vercel.app",
    githubUrl: "https://github.com/modouaicha023/GalsenCodingChallenge",
  },
  {
    name: "Sama Keur",
    slug: "sama-keur",
    coverImage: "/projects/sama-keur.png",
    stack: ["React", "JavaScript", "MongoDB", "Express"],
    description:
      "SamaKeur is a user-friendly real estate platform where users can register using their email address or Google account. They have the ability to add, delete, and modify real estate rental or sale listings with ease. Find your dream home or a reliable tenant in the blink of an eye thanks to SamaKeur.",
    url: "https://sama-keur-sn.onrender.com",
    githubUrl: "https://github.com/modouaicha023/sama-keur-sn",
  },
  {
    name: "Jayy Ma Baguette",
    slug: "jayy-ma-baguette",
    coverImage: "/projects/jayy-ma-baguette.png",
    stack: ["HTML", "CSS"],
    description:
      "JayyMaBaguette is a landing page for a baker. It has 7 sections: the header, the category section, the about us section, the menu section, the product presentation section, the contact form, and the footer.",
    url: "https://modouaicha023.github.io/jaaymabaguette",
    githubUrl: "https://github.com/modouaicha023/jaaymabaguette",
  },
  {
    name: "Sama Car",
    slug: "sama-car",
    coverImage: "/projects/sama-car.png",
    stack: ["React", "Tailwind CSS"],
    description:
      "Sama Car is a landing page for a car business. It is a React application, styled using Tailwind CSS. The landing page aims to showcase the car business and its offerings to potential customers in an engaging and visually appealing manner.",
    url: "https://sama-car.vercel.app",
    githubUrl: "https://github.com/modouaicha023/sama-car",
  },
  {
    name: "Sen Coffee",
    slug: "sen-coffee",
    coverImage: "/projects/sen-coffee.png",
    stack: ["React", "Tailwind CSS"],
    description:
      "Sen Coffee is a homepage for a coffee shop. It is a React application styled with Tailwind CSS. The purpose of this homepage is to present the coffee business and its products in an attractive and visually appealing way to potential customers.",
    url: "https://sen-coffee.netlify.app/",
    githubUrl: "https://github.com/modouaicha023/sen-coffee",
  },
];
export const navbarLinks: NavbarLink[] = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

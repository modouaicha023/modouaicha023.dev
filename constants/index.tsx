import { Icons } from "@/components/icons";
import {
  Project,
  NavbarLink,
  SocialLink,
  Stack,
  CarouselItem,
  Work,
} from "@/types";
import {
  Building2,
  GalleryHorizontalEnd,
  Home,
  SquareLibrary,
  User,
} from "lucide-react";

export const projects: Project[] = [
  {
    name: "K.wax Design",
    // slug: "kwaxdesign",
    slug: "#",
    coverImage: "/projects/kwaxdesign.png",
    logo: "/projects/kwaxdesign-logo.jpg",
    stack: ["WordPress"],
    description:
      "K.wax Design is a handmade furniture brand based in Dakar, Senegal. It blends traditional craftsmanship with vibrant African wax fabrics to create customizable, unique home decor pieces. Each item is 100% handmade and tailored to bring life and color into any space.",
    url: "https://www.kwaxdesign.com",
    githubUrl: "#",
    type: "Freelance",
  },
  {
    name: "Studio Panache",
    slug: "#",
    // slug: "studio-panache",
    coverImage: "/projects/studio-panache.png",
    logo: "/projects/stuido-panache-logo.jpeg",
    stack: ["NextJS", "Tailwind CSS", "TypeScript", "Strapi"],
    description:
      "Studio Panache is a creative art studio based in Dakar that redefines African design with bold, iconic creations. Merging tradition and pop culture, the studio produces vibrant visuals printed on premium art paper, celebrating a modern, moving Africa.",
    url: "https://www.studio-panache.com/",
    githubUrl: "#",
    type: "Freelance",
  },

  {
    name: "Quad Lac Rose",
    slug: "quadlacrose",
    coverImage: "/projects/quadlacrose.png",
    logo: "/projects/quadlacrose-logo.jpg",
    stack: ["NextJS", "Tailwind CSS", "TypeScript"],
    description:
      "Quad Lac Rose is a dynamic booking website built for a quad rental company operating around the Lac Rose area. Developed with Next.js, Tailwind CSS, and TypeScript, it provides an intuitive interface to explore different quad tours and make online reservations with ease.",
    url: "https://www.quadlacrose.com?utm_source=modouaicha023&utm_medium=project&utm_campaign=client",
    githubUrl: "#",
    type: "Freelance",
  },
  {
    name: "Lac Rose Excursion",
    slug: "lac-rose-excursion",
    coverImage: "/projects/lac-rose-excursion.png",
    logo: "/projects/lac-rose-excursion-logo.jpg",
    stack: ["NextJS", "Tailwind CSS", "TypeScript"],
    description:
      "Lac Rose Excursion is a modern website crafted for a local excursion company offering guided tours around Lac Rose. Leveraging Next.js, Tailwind CSS, and TypeScript, the platform enables users to discover available excursions and book their experiences directly online.",
    url: "https://lac-rose-excursion.com?utm_source=modouaicha023&utm_medium=project&utm_campaign=client",
    githubUrl: "#",
    type: "Freelance",
  },
  {
    name: "Galsen GitHub Users",
    slug: "galsen-github-users",
    coverImage: "/projects/galsen-github-users.png",
    logo: "/projects/galsen-github-users-logo.png",
    stack: ["Next.js", "TypeScript"],
    description:
      "An open source application to view the profiles of Senegalese developers on GitHub, their preferred languages ​​and their contributions.",
    url: "https://galsen-github-users.vercel.app",
    githubUrl: "https://github.com/modouaicha023/galsen-github-users",
    type: "Personal",
  },

  {
    name: "Galsen Mangas",
    slug: "galsen-mangas",
    coverImage: "/projects/galsen-mangas.png",
    logo: "/projects/galsen-mangas-logo.png",

    stack: ["Next.JS", "TypeScript"],
    description:
      "An app offering free access to anime, manga, and novels, packed with features for a seamless and enjoyable experience.",
    url: "https://galsen-mangas.vercel.app",
    githubUrl: "https://github.com/modouaicha023/galsen-mangas",
    type: "Personal",
  },
  {
    name: "Game Of Life",
    slug: "game-of-life",
    coverImage: "/projects/game-of-life.png",
    logo: "/projects/game-of-life-logo.png",
    stack: ["JavaScript", "HTML", "CSS"],
    description:
      "This is a game called Game of life challenge. The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
    url: "https://modouaicha023.github.io/GameOfLife",
    githubUrl: "https://github.com/modouaicha023/GameOfLife",
    type: "Personal",
  },
  // {
  //   name: "Galsen Coding Challenge",
  //   slug: "galsen-coding-challenge",
  //   coverImage: "/projects/galsen-coding-challenge.png",
  //   logo: "/projects/galsen-coding-challenge-logo.png",
  //   stack: ["Next.JS", "TypeScript", "MongoDB"],
  //   description:
  //     "This project aims to create a platform for coding challenges and collaboration within the Senegalese coding community. Users can participate in challenges, create their own, and engage in collaborative coding efforts.",
  //   url: "https://galsen-coding-challenge.vercel.app",
  //   githubUrl: "https://github.com/modouaicha023/GalsenCodingChallenge",
  // },
  // {
  //   name: "Sama Keur",
  //   slug: "sama-keur",
  //   coverImage: "/projects/sama-keur.png",
  //   logo: "/projects/lac-rose-excursion-logo.png",
  //   stack: ["React", "JavaScript", "MongoDB", "Express"],
  //   description:
  //     "SamaKeur is a user-friendly real estate platform where users can register using their email address or Google account. They have the ability to add, delete, and modify real estate rental or sale listings with ease. Find your dream home or a reliable tenant in the blink of an eye thanks to SamaKeur.",
  //   url: "https://sama-keur-sn.onrender.com",
  //   githubUrl: "https://github.com/modouaicha023/sama-keur-sn",
  // },
  // {
  //   name: "Jayy Ma Baguette",
  //   slug: "jayy-ma-baguette",
  //   coverImage: "/projects/jayy-ma-baguette.png",
  //   logo: "/projects/jayy-ma-baguette-logo.png",
  //   stack: ["HTML", "CSS"],
  //   description:
  //     "JayyMaBaguette is a landing page for a baker. It has 7 sections: the header, the category section, the about us section, the menu section, the product presentation section, the contact form, and the footer.",
  //   url: "https://modouaicha023.github.io/jaaymabaguette",
  //   githubUrl: "https://github.com/modouaicha023/jaaymabaguette",
  //   type: "Personal",
  // },
  // {
  //   name: "Sama Car",
  //   slug: "sama-car",
  //   coverImage: "/projects/sama-car.png",
  //   logo: "/projects/sama-car-logo.png",
  //   stack: ["React", "Tailwind CSS"],
  //   description:
  //     "Sama Car is a landing page for a car business. It is a React application, styled using Tailwind CSS. The landing page aims to showcase the car business and its offerings to potential customers in an engaging and visually appealing manner.",
  //   url: "https://sama-car.vercel.app",
  //   githubUrl: "https://github.com/modouaicha023/sama-car",
  //   type: "Personal",
  // },
  // {
  //   name: "Sen Coffee",
  //   slug: "sen-coffee",
  //   coverImage: "/projects/sen-coffee.png",
  //   logo: "/projects/sen-coffee-logo.png",
  //   stack: ["React", "Tailwind CSS"],
  //   description:
  //     "Sen Coffee is a homepage for a coffee shop. It is a React application styled with Tailwind CSS. The purpose of this homepage is to present the coffee business and its products in an attractive and visually appealing way to potential customers.",
  //   url: "https://sen-coffee.netlify.app/",
  //   githubUrl: "https://github.com/modouaicha023/sen-coffee",
  //   type: "Personal",
  // },
];

export const works: Work[] = [
  {
    company: "AKASSAA",
    link: "https://akassaa.com",
    badges: ["Hybrid"],
    title: "Full Stack Developer",
    logo: "/works/akassaa.png",
    start: "01/2024",
    end: "03/2025",
    description:
      "Engaged in various projects utilizing Odoo, NestJS, and Next.js frameworks, alongside working on WordPress websites.",
    slug: "akassaa",
  },
  {
    company: "Creations Design Studio",
    link: "https://fr.linkedin.com/company/creations-design-studio",
    badges: ["Remote"],
    title: "Full Stack Developer",
    logo: "/works/creations-design-studio.jpeg",
    start: "09/2023",
    end: "10/2023",
    description:
      "Development of a Fast Food website with Html, CSS and JavaScript as Frontend and PHP as Backend.",
    slug: "creations-design-studio",
  },
  {
    company: "FALLATECH",
    link: "https://fallatech.org",
    badges: ["On-site"],
    title: "Frontend Developer",
    logo: "/works/fallatech.svg",
    start: "05/2023",
    end: "07/2023",
    description:
      "Development of a henhouse management web application with Html, Css and JavaScript.",
    slug: "fallatech",
  },
];

export const navbarLinks: NavbarLink[] = [
  {
    title: "home",
    href: "/",
    icon: Home,
  },
  {
    title: "about",
    href: "/about",
    icon: User,
  },
  {
    title: "projects",
    href: "/projects",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "blog",
    href: "/blog",
    icon: SquareLibrary,
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "X",
    href: "https://x.com/modouaicha023",
    icon: Icons.x,
    mobile: "twitter://user?screen_name=modouaicha023",
  },
  {
    title: "GitHub",
    href: "https://github.com/modouaicha023",
    icon: Icons.gitHub,
    mobile: "github://github.com/modouaicha023",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/modouaicha023",
    icon: Icons.linkedIn,
    mobile: "linkedin://in/modouaicha023",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@modouaicha023",
    icon: Icons.youTube,
    mobile: "youtube://www.youtube.com/@modouaicha023",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/modouaicha023/",
    icon: Icons.instagram,
    mobile: "instagram://user?username=modouaicha023",
  },
];

export const stacks: Stack[] = [
  // --- Languages ---
  {
    title: "JavaScript",
    icon: Icons.javascript,
  },
  {
    title: "TypeScript",
    icon: Icons.typescript,
  },
  {
    title: "Python",
    icon: Icons.python,
  },
  {
    title: "Java",
    icon: Icons.java,
  },
  {
    title: "PHP",
    icon: Icons.php,
  },
  {
    title: "HTML",
    icon: Icons.html,
  },
  {
    title: "CSS",
    icon: Icons.css,
  },

  // --- Frontend Frameworks ---
  {
    title: "React",
    icon: Icons.react,
  },
  {
    title: "NextJS",
    icon: Icons.nextJs,
  },
  // {
  //   title: "Vue JS",
  //   icon: Icons.vueJs,
  // },
  // {
  //   title: "Nuxt",
  //   icon: Icons.nuxt,
  // },
  // {
  //   title: "Angular",
  //   icon: Icons.angular,
  // },

  // --- Backend Frameworks ---
  {
    title: "Node",
    icon: Icons.nodeJS,
  },
  {
    title: "NestJS",
    icon: Icons.nestJs,
  },

  // --- Styling ---
  {
    title: "Tailwind CSS",
    icon: Icons.tailwindcss,
  },

  // --- CMS & Platforms ---
  {
    title: "WordPress",
    icon: Icons.wordpress,
  },

  // --- DevOps & Tools ---
  {
    title: "Docker",
    icon: Icons.docker,
  },
  // {
  //   title: "AWS",
  //   icon: Icons.aws,
  // },
  // {
  //   title: "CI/CD",
  //   icon: Icons.cicd,
  // },

  {
    title: "Git",
    icon: Icons.git,
  },
  {
    title: "Linux",
    icon: Icons.linux,
  },

  // --- Databases ---
  {
    title: "PostgreSQL",
    icon: Icons.postgresql,
  },
  {
    title: "MongoDB",
    icon: Icons.mongodb,
  },
];

export const carouselItems: CarouselItem[] = [
  { title: "Modou Aicha Diop", url: "/mo.jpg" },
  { title: "Modou Aicha Diop", url: "/mojinwoo.png" },
  { title: "Modou Aicha Diop", url: "/modou-aicha-diop.png" },
  { title: "Modou Aicha Diop", url: "/sololeveling.jpg" },
  { title: "Modou Aicha Diop", url: "/solo-leveling.JPG" },
  { title: "Modou Aicha Diop", url: "/modouaicha0230.jpeg" },
  { title: "Modou Aicha Diop", url: "/modouaicha02301.jpeg" },
  { title: "Modou Aicha Diop", url: "/modouaicha.JPG" },
];

import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end sticky top-0 z-50 w-full px-4 py-2 m-2">
      <nav className="flex px-4 gap-x-2 py-2 items-center bg-red-100 rounded-2xl">
        <Link href={"/"}>
          <Image
            src="/logo-no-bg.png"
            alt="Modou Aicha Diop, modouaicha023, portfolio"
            width={400}
            height={400}
            className="w-4 h-4 object-fill"
          />
        </Link>
        <ul className="flex w-fit gap-x-2">
          {navbarLinks.map((navbarLinks, index) => (
            <Link
              href={navbarLinks.href}
              className="hover:underline"
              key={index}
            >
              {navbarLinks.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

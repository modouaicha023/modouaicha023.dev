import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed md:sticky bottom-0 md:top-0 z-50 w-full md:flex md:justify-end md:px-4 md:py-2 md:m-2">
      <nav className="flex justify-around items-center w-full py-3 bg-red-100 md:hidden">
        <Link href={"/"} className="flex flex-col items-center">
          <Image
            src="/logo-no-bg.png"
            alt="Modou Aicha Diop"
            width={400}
            height={400}
            className="w-6 h-6 object-fill"
          />
          <span className="text-xs mt-1">Home</span>
        </Link>

        {navbarLinks.map((link, index) => (
          <Link
            href={link.href}
            className="flex flex-col items-center"
            key={index}
          >
            <div className="w-6 h-6 flex items-center justify-center"></div>
            <span className="text-xs mt-1">{link.title}</span>
          </Link>
        ))}
      </nav>

      <nav className="hidden md:flex px-4 gap-x-4 py-2 items-center bg-red-100 rounded-2xl">
        <Link href={"/"}>
          <Image
            src="/logo-no-bg.png"
            alt="Modou Aicha Diop, modouaicha023, portfolio"
            width={400}
            height={400}
            className="w-6 h-6 object-fill"
          />
        </Link>
        <ul className="flex gap-x-4">
          {navbarLinks.map((link, index) => (
            <Link
              href={link.href}
              className="hover:underline font-medium"
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

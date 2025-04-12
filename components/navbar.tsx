"use client";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useDeviceDetect } from "./hooks/use-device-detect";

export default function Navbar() {
  const { isMobile } = useDeviceDetect();
  const pathname = usePathname();

  return (
    <div className="fixed sm:sticky bottom-0 sm:top-0 z-50 w-full sm:flex sm:justify-end sm:px-4 sm:py-2">
      {isMobile ? (
        <nav className="flex justify-around bg-[#fce7f6] dark:bg-[#141414] items-center w-full py-3 rounded-t-2xl">
          <Link
            href="/"
            className={clsx(
              "flex flex-col items-center p-2 rounded-lg",
              pathname === "/" ? "bg-pink-300 dark:bg-zinc-800" : "bg-white"
            )}
          >
            <Image
              src="/logo-no-bg.png"
              alt="Modou Aicha Diop"
              width={400}
              height={400}
              className="w-6 h-6 object-fill"
            />
          </Link>

          {navbarLinks.slice(1).map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={index}
                onContextMenu={(e) => e.preventDefault()}
                className={clsx(
                  "flex flex-col items-center px-2 py-1 rounded-lg transition",
                  isActive
                    ? "bg-pink-300 dark:bg-zinc-800 text-black dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-xs mt-1">{link.title}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      ) : (
        <nav className="flex px-4 gap-x-4 py-2 items-center rounded-2xl">
          <Link
            href="/"
            className={clsx(
              "bg-white p-2 rounded-lg",
              pathname === "/" && "ring-2 ring-pink-300"
            )}
          >
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
                key={index}
                className={clsx(
                  "hover:underline font-medium px-2 py-1 rounded-md transition",
                  pathname === link.href && "text-pink-600 underline"
                )}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      )}
    </div>
  );
}

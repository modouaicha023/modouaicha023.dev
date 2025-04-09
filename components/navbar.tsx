"use client";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices =
          /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

        const isMobileViewport = window.innerWidth < 640;

        setIsMobile(mobileDevices.test(userAgent) || isMobileViewport);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile };
}

export default function Navbar() {
  const { isMobile } = useDeviceDetect();

  return (
    <div className="fixed sm:sticky bottom-0 sm:top-0 z-50 w-full sm:flex sm:justify-end sm:px-4 sm:py-2 ">
      {isMobile ? (
        <nav className="flex justify-around items-center w-full py-3  rounded-t-2xl">
          <Link href={"/"} className="flex flex-col items-center">
            <Image
              src="/logo-no-bg.png"
              alt="Modou Aicha Diop"
              width={400}
              height={400}
              className="w-6 h-6 object-fill"
            />
            {/* <span className="text-xs mt-1">Home</span> */}
          </Link>

          {navbarLinks.slice(1).map((link, index) => (
            <Link
              href={link.href}
              className="flex flex-col items-center"
              key={index}
            >
              {/* <div className="w-6 h-6 flex items-center justify-center"></div> */}
              {<link.icon className="w-4 h-4" />}
              <span className="text-xs mt-1">{link.title}</span>
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="flex px-4 gap-x-4 py-2 items-center rounded-2xl">
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
      )}
    </div>
  );
}

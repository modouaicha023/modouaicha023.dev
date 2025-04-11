"use client";
import { socialLinks } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SocialMedia() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);
  return (
    <div className="flex flex-wrap w-full items-center justify-start gap-4">
      {socialLinks.map((social, i) => (
        <Link
          href={isMobile ? social.mobile : social.href}
          key={i}
          target="_blank"
          className="flex gap-x-1 items-center hover:underline hover:opacity-70"
        >
          <social.icon className="w-4 h-4" />
          <span className="text-sx">{social.title}</span>
        </Link>
      ))}
    </div>
  );
}

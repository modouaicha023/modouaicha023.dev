import { socialLinks } from "@/constants";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap w-full items-center justify-start gap-4">
      {socialLinks.map((social, i) => (
        <Link
          href={social.href}
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

import { works } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  const sortedWorks = [...works].sort((a, b) => {
    const dateA = new Date(a.start.split("/").reverse().join("/"));
    const dateB = new Date(b.start.split("/").reverse().join("/"));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-800 dark:text-white mb-8">
        Career
      </h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-[#0A0A0A] dark:bg-[#FEF1FA] z-0"></div>

        <div className="flex flex-col space-y-12">
          {sortedWorks.map((work, index) => (
            <div key={index} className="relative">
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 w-8 h-8  bg-[#0A0A0A] dark:bg-[#FEF1FA] rounded-full border-4 border-white dark:border-zinc-900 z-10 flex items-center justify-center">
                <span className="text-xs font-bold dark:text-black text-white">
                  {sortedWorks.length - index}
                </span>
              </div>

              <Link
                href={work.link}
                target="_blank"
                className="group ml-12 sm:ml-16 flex flex-col sm:flex-row items-start gap-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-700 hover:border-gray-400 rounded-lg p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                tabIndex={0}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={work.logo}
                    alt={work.company + " | Modou Aicha Diop"}
                    width={1280}
                    height={1280}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-zinc-200 dark:border-zinc-700"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white  transition-colors">
                      {work.company}
                    </h3>
                    {work.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium   bg-pink-300 dark:bg-zinc-800 "
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {work.title}
                  </p>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    {work.start} - {work.end}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {work.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

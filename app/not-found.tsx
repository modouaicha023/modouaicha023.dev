import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col overflow-hidden min-h-screen p-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-96 inset-0  object-contain rounded-lg"
      >
        <source src="/zoro-lost.mp4" type="video/mp4" />
        <source src="/zoro-lost.webm" type="video/webm" />
        <img
          src="/zoro-lost.webp"
          alt="Zoro lost as usual"
          className="w-full h-full object-cover"
        />
      </video>

      <div className="text-9xl font-extrabold mb-4 drop-shadow-md">404</div>

      <h2 className="text-3xl font-bold mb-4">Zoro Got Lost Again!</h2>

      <div className="text-center mb-8 max-w-md space-y-4">
        <p className="text-lg">
          "I'm not lost! The page must have moved!"
          <span className="block italic text-sm mt-1">- Roronoa Zoro</span>
        </p>

        <p>
          Just like Zoro's infamous sense of direction, the resource you're
          looking for seems to have wandered off somewhere else in the Grand
          Line.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 font-medium rounded-md transition-colors text-white dark:text-black duration-300 shadow-md bg-black dark:bg-white"
        >
          Back to East Blue
        </Link>
      </div>
    </div>
  );
}

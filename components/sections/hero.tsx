import ScrambleText from "../scramble-text";
import { stacks } from "@/constants";
import SocialMedia from "../social-media";
import Image from "next/image";

export default function Hero() {
  // const audioRef = useRef<HTMLAudioElement>(null);

  // const playAudio = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };

  return (
    <>
      <section className="flex flex-col xl:flex-row gap-8 justify-center items-center mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center mx-auto">
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold max-w-lg tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Software Developer, Freelancer & soon Tech Content Creator⏳
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Hey, I&apos;m <ScrambleText>Modou Aicha</ScrambleText> — a
              self-taught developer and freelancer passionate about building
              apps, crafting helpful dev content, and empowering others in tech.
            </p>
          </div>
          <div className="flex flex-col w-full items-start max-w-2xl">
            <p className="w-full">
              <span className="tracking-wide underline">@modouaicha023</span> on
              all platforms
            </p>
            <SocialMedia />
            <div className="mt-4 flex flex-wrap w-full items-center gap-2 max-w-lg">
              {stacks.map((stack, i) => (
                <div
                  key={i}
                  className="flex gap-x-1 items-center dark:bg-white dark:text-black text-white bg-black rounded-lg px-2 py-1"
                >
                  <stack.icon className="w-6 h-6" />
                  <span className="text-sx">{stack.title}</span>
                </div>
              ))}
            </div>
            {/* 
          <button
            onClick={playAudio}
            className="mt-4 px-4 py-2 rounded-lg shadow"
          >
            ▶ Play Audio
          </button>
          <audio ref={audioRef} loop autoPlay>
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio> */}
          </div>
        </div>
        <div className="w-full xl:w-[350px] h-[400px] border rounded-lg max-w-2xl overflow-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/solo.mp4" type="video/mp4" />
            <source src="/solo.webm" type="video/webm" />
            <Image
              src="/solo.webp"
              alt="Modou Aicha Diop"
              width={1280}
              height={1280}
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        <span className="font-italic xl:hidden">
          {"( I just ❤️ Solo Leveling ) "}
        </span>
      </section>
      <div className="font-italic hidden xl:flex items-center justify-end p-4 text-center w-full">
        {"( I just ❤️ Solo Leveling ) "}
      </div>
    </>
  );
}

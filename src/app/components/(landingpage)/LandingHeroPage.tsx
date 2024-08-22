"use client";
import { Cabin } from "next/font/google";
// import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingHeroPage = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 text-white font-bold py-36 text-center space-y-5">
      <div
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xpace-y-5 font-extrabold",
          font.className
        )}
      >
        <h1>Discover, Share and Savor Recipes</h1>
        {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot",
                "Photo Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div> */}
        <div
          className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl xpace-y-5 font-extrabold mt-5",
            font.className
          )}
        >
          From Around The World
        </div>
        <div className="flex flex-row items-center justify-center gap-10 m-10">
          <button className="btn btn-active btn-primary">JOIN US</button>
          <button className="btn btn-active btn-accent">Explore Recipes</button>
        </div>
        <div
          className={cn(
            "text-sm sm:text-md md:text-xl lg:text-2xl xpace-y-5 font-extrabold mt-5",
            font.className
          )}
        >
          Join a global community of food lovers!
        </div>
        <div
          className={cn(
            "text-sm sm:text-md md:text-xl lg:text-2xl xpace-y-5 font-extrabold mt-5",
            font.className
          )}
        >
          Find inspiration, share your culinary creations, and bring new flavors
          to your kitchen.
        </div>
        {/* <div className="text-sm md:text-xl font-light text-zinc-300">
          Create Content using AI 10x faster.
        </div> */}
        {/* <div>
          <Link href="/sign-up">
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-950 md:text-lg p-4 md:p-6 font-semibold">
              Start Generating For Free
            </button>
          </Link>
        </div> */}
        {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required
        </div> */}
      </div>
    </div>
  );
};

export default LandingHeroPage;

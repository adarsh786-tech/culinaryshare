"use client";
import { useRouter } from "next/navigation";

import { Cabin } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingHeroPage = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 text-white font-bold py-36 text-center space-y-5">
      <div
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xpace-y-5 font-extrabold",
          font.className
        )}
      >
        <h1>Discover, Share and Savor Recipes</h1>
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
          <button
            className="btn btn-active btn-accent"
            onClick={() => router.push("/recipe/explore-recipes")}
          >
            Explore Recipes
          </button>
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
      </div>
    </div>
  );
};

export default LandingHeroPage;

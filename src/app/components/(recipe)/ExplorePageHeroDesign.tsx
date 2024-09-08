"use client";
import { useRouter } from "next/navigation";

import { Ubuntu } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});

const ExplorePageHeroDesign = () => {
  return (
    <div
      className={cn(
        "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xpace-y-5 font-extrabold",
        font.className
      )}
    >
      <h1>Discover Recipes </h1>
      <div
        className={cn(
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl xpace-y-5 font-extrabold mt-5",
          font.className
        )}
      >
        From Around The World
      </div>

      <div
        className={cn(
          "text-sm sm:text-md md:text-xl lg:text-2xl xpace-y-5 font-extrabold mt-5",
          font.className
        )}
      >
        Get Inspired From Others to your kitchen.
      </div>
    </div>
  );
};

export default ExplorePageHeroDesign;

"use client";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/culinary_share_logo.png";

import { cn } from "@/lib/utils";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavBar = () => {
  return (
    <nav className="border-b-2 border-white p-4 bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image
            fill
            alt="Logo"
            src={Logo}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg border border-red shadow-white"
          />
        </div>
        <h1
          className={cn("text-2xl font-bold text-yellow-200 ", font.className)}
        >
          CULINARY <span className="text-[18px] -ml-1">share</span>
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <button
            className="btn btn-active"
            // className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-950"
          >
            {" "}
            Sign in
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavBar;

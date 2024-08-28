"use client";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/culinary_share_logo.png";
import PlaceholderAvatar from "@/assets/placeholder_avatar.jpg";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

import { useSession } from "next-auth/react";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavBar = () => {
  const { data: session, status } = useSession();
  console.log("Session Details: " + JSON.stringify(session, null, 2));

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     alert(`Session ${status}`);
  //   }
  // }, [status]);

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
          className={cn("text-2xl font-bold text-yellow-200", font.className)}
        >
          <span className="-ml-2">CULINARY</span>{" "}
          <span className="text-[18px] -ml-2">share</span>
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        {!session ? (
          <Link href="/auth/register">
            <button className="btn bg-purple-500 text-slate-950 font-bold py-2 px-4 rounded-md hover:bg-purple-600 hover:text-white ">
              {" "}
              Sign in
            </button>
          </Link>
        ) : (
          <div className="avatar online">
            <div className="w-12 rounded-full border-yellow-500 border-2">
              <Image src={PlaceholderAvatar} alt="Profile Picture" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default LandingNavBar;

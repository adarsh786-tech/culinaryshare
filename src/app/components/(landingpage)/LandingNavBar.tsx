"use client";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/culinary_share_logo.png";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import ProfileMenu from "@/app/components/(generic)/ProfileMenu";
import { Avatar } from "@mui/material";
import SamplePlaceholder from "../../../assets/placeholder_avatar.jpg";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavBar = () => {
  const { data: session, status } = useSession();
  // console.log("Session Details: " + JSON.stringify(session, null, 2));
  const router = useRouter();

  return (
    <nav className="border-b-2 border-white p-4 bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4" onClick={() => router.push("/")}>
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
        {!session && status === "unauthenticated" ? (
          <Link href="/auth/register">
            <button className="btn bg-purple-500 text-slate-950 font-bold py-2 px-4 rounded-md hover:bg-purple-600 hover:text-white ">
              {" "}
              Sign in
            </button>
          </Link>
        ) : status === "loading" ? (
          <div className="avatar online flex items-center justify-center">
            <div className="w-12 rounded-full border-yellow-500 border-2">
              <Avatar
                src="../../../assets/placeholder_avatar.jpg"
                className="w-full h-full"
              />
            </div>
          </div>
        ) : (
          <ProfileMenu />
        )}
      </div>
    </nav>
  );
};
export default LandingNavBar;

import Logo from "@/assets/culinary_share_logo.png";
import Image from "next/image";
import { Cabin } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});

const LandingFooter = () => {
  return (
    <footer className="border-2 border-white footer bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 text-base-content p-10">
      <aside>
        <div className=" relative w-11 h-11 mr-4">
          <Image
            fill
            alt="Logo"
            src={Logo}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg border border-red shadow-white"
          />
        </div>

        <h1 className={cn("text-2xl font-bold text-white ", font.className)}>
          CULINARY <span className="text-[18px]">share</span>
        </h1>
        <h2 className="text-white -mt-2 text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved
        </h2>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default LandingFooter;

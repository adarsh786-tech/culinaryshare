"use client";
// component imports
import LandingNavBar from "@/app/components/(landingpage)/LandingNavBar";
import LandingHeroPage from "@/app/components/(landingpage)/LandingHeroPage";
import LandingFooter from "@/app/components/(landingpage)/LandingFooter";
// next-auth and hooks imports


const LandingPage = () => {
  return (
    <>
      <LandingNavBar />
      <LandingHeroPage />
      <LandingFooter />
    </>
  );
};
export default LandingPage;

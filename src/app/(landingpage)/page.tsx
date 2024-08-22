"use client";
// component imports
import LandingNavBar from "@/app/components/(landingpage)/LandingNavBar";
import LandingHeroPage from "@/app/components/(landingpage)/LandingHeroPage";
import LandingFooter from "@/app/components/(landingpage)/LandingFooter";
// next-auth and hooks imports
import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   console.log("Session Details: " + JSON.stringify(session, null, 2));

//   if (session) {
//     return (
//       <>
//         Signed in as {session.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn("github")}>Sign in with Github</button>
//     </>
//   );
// }

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

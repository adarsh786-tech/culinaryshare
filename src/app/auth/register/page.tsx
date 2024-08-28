import AuthenticationForm from "@/app/components/(registrationform)/AuthenticationForm";
import LandingNavBar from "@/app/components/(landingpage)/LandingNavBar";
import LandingFooter from "@/app/components/(landingpage)/LandingFooter";

const RegisterUser = () => {
  return (
    <>
      <LandingNavBar />
      <AuthenticationForm />
      <div className="m-4" />
      <LandingFooter />
    </>
  );
};
export default RegisterUser;

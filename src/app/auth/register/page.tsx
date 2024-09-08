import AuthenticationForm from "@/app/components/(registrationform)/AuthenticationForm";
import LandingNavBar from "@/app/components/(landingpage)/LandingNavBar";
import LandingFooter from "@/app/components/(landingpage)/LandingFooter";

const RegisterUser = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600">
      <LandingNavBar />
      <AuthenticationForm />
      <div className="mb-11" />
      <LandingFooter />
    </div>
  );
};
export default RegisterUser;

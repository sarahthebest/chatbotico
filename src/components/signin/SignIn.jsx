import SignInForm from "./SignInForm";
import Tabs from "../landing/Tabs";
import Welcome from "../landing/Welcome";

const Register = () => {
  return (
    <div className="w-full pt-28 md:w-4/6 lg:w-2/6 mx-auto">
      <div className="signin mx-auto p-10 md:p-4 md:border-white/30
       md:border border-0 shadow-lg rounded-md backdrop-blur-md">
        <Welcome />
        <Tabs />
        <SignInForm />
      </div>
    </div>
  );
};

export default Register;

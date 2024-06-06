import SignInForm from "./SignInForm";
import Tabs from "../landing/Tabs";
import Welcome from "../landing/Welcome";

const Register = () => {
  return (
    <div className="w-full pt-20 sm:w-4/6 md:w-3/6 lg:w-2/6 mx-auto">
      <div className="register mx-auto p-4 border shadow-lg rounded-md">
        <Welcome />
        <Tabs />
        <SignInForm />
      </div>
    </div>
  );
};

export default Register;

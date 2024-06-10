import RegisterForm from "./RegisterForm";
import Tabs from "../landing/Tabs";
import Welcome from "../landing/Welcome";
import Sidebar from "../landing/Sidebar";
import LandingHeader from "../landing/landingHeader";

const Register = () => {
  return (
    <>
    <LandingHeader />
    <div className="content flex flex-col md:flex-row overflow-hidden">
    2<div className="w-full pt-28 md:w-4/6 lg:w-2/6 mx-auto">
      <div className="register mx-auto p-10 md:p-4 md:border-white/30 md:border border-0 shadow-lg rounded-md">
          <Welcome />
          <Tabs />
          <RegisterForm />
        </div>
      </div>
      <Sidebar />
    </div>
    </>
  );
};

export default Register;

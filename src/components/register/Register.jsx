import RegisterForm from "./RegisterForm";
import Tabs from "../landing/Tabs";
import Welcome from "../landing/Welcome";
import Sidebar from "../landing/Sidebar";
import LandingHeader from "../landing/landingHeader";

const Register = () => {
  return (
    <>
    <LandingHeader />
    <div className="content flex flex-col sm:flex-row overflow-hidden">
    <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/6 mx-auto pt-28">
        <div className="register mx-auto p-4 border shadow-lg rounded-md">
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

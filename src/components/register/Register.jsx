import RegisterForm from "./RegisterForm";
import Tabs from "../landing/Tabs";
import Welcome from "../landing/Welcome";
import Sidebar from "../landing/Sidebar";

const Register = () => {
  return (
    <div className="content  flex flex-row overflow-hidden h-full">
      <div className="w-full pt-20 sm:w-4/6 md:w-3/6 lg:w-2/6 mx-auto">
        <div className="register mx-auto p-4 border shadow-lg rounded-md">
          <Welcome />
          <Tabs />
          <RegisterForm />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Register;

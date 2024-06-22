import RegisterForm from "./RegisterForm";
import Tabs from "../landing/Tabs";
import Sidebar from "../landing/Sidebar";

const Register = () => {
  return (
    <>
    <div className="content flex flex-col lg:flex-row overflow-hidden h-full">
    <div className="w-full pt-10 lg:pt-28 md:w-4/6 lg:w-2/6 mx-auto">
      <div className="register mx-auto p-10 md:p-4 lg:border-neutral
       lg:border border-0 rounded-md backdrop-blur-md">
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

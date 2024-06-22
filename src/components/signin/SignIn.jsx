import SignInForm from "./SignInForm";
import Tabs from "../landing/Tabs";
import Sidebar from "../landing/Sidebar";


const SignIn = ({ setAuth }) => {
  return (
    <>
      <div className="content flex flex-col lg:flex-row overflow-hidden h-screen">
      <div className="w-full pt-10 lg:pt-28 md:w-4/6 lg:w-2/6 mx-auto">
      <div
            className="signIn  mx-auto p-10 md:p-4 lg:border-neutral
   lg:border border-0 rounded-md backdrop-blur-md"
          >
            <Tabs />
            <SignInForm />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default SignIn;

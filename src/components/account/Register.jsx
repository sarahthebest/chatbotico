import RegisterForm from "../unlogged/RegisterForm";
import Tabs from "../unlogged/Tabs";

const Register = () => {
  return (
    <div className="register container mx-auto mt-20 text-center">
      <div className="unloggedHeader flex-col flex gap-6 mb-10">
        <h1 className="font-bitmap text-6xl text-accent">Chatify</h1>
        <p>
          Welcome to Chatify, either sign in or create a account to get started
        </p>
      </div>
      <Tabs />
      <RegisterForm />
      <button className="btn hover:bg-accent hover:text-black">Register Account</button>
    </div>
  );
};

export default Register;

import SignInForm from "../unlogged/SignInForm";
import Tabs from "../unlogged/Tabs";

const Register = () => {
    return ( 
        <div className="signIn container mx-auto mt-20 text-center">
            <div className="unloggedHeader flex-col flex gap-6 mb-10">
            <h1 className="font-bitmap text-6xl text-accent">Chatify</h1>
            <p>Welcome to Chatify, either sign in or create a account to get started</p>
            </div>
            <Tabs />
            <SignInForm />
            <button className="btn hover:bg-accent hover:text-black">Sign In</button>
        </div>
     );
}
 
export default Register;
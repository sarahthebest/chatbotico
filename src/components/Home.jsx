import Sidebar from "./landing/Sidebar";
import LandingHeader from "./landing/landingHeader";
import SignIn from "./signin/SignIn";

const Home = () => {
  return (
    <>
      <LandingHeader />
      <div className="content relative flex flex-col md:flex-row overflow-hidden">
        <SignIn />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

import Sidebar from "./landing/Sidebar";
import LandingHeader from "./landing/landingHeader";
import SignIn from "./signin/SignIn";

const Home = () => {
  return (
    <>
      <LandingHeader />
      <div className="content flex flex-col sm:flex-row overflow-hidden">
        <SignIn />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

import { useEffect } from "react";
import Welcome from "./landing/Welcome";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <>
      <div className="home w-full h-screen flex flex-col overflow-hidden isolate relative">
        <h1 className="huge font-bitmap relative z-10 text-accent ms-6 lg:ms-32 mt-20 text-wrap">
          Chat Botico
        </h1>
        <div className="landing absolute start-6 bottom-6 lg:start-32 lg:bottom-32 flex flex-col justify-start mb-0 w-fit h-fit z-50">
          <Welcome />
          <div className="btnGroup join">
            <Link to="/signin">
              <button className="btn bg-primary hover:bg-secondary hover:text-neutral-900 w-fit join-item">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn bg-accent hover:bg-secondary hover:text-neutral-900 w-fit join-item">
                Register
              </button>
            </Link>
          </div>
        </div>
        return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
        <div className="blob bg-gradient-to-tr from-primary to-secondary via-accent absolute top-0"></div>
      </div>
    </>
  );
};

export default Home;

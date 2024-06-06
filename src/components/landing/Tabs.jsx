import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();

  return (
    <div className="tabsContainer container mx-auto">
      <div role="tablist" className="tabs tabs-boxed">
        <Link role="tab" className={`tab ${location.pathname === "/" ? "tab-active" : ""}`} to="/">
          Sign In
        </Link>
        <Link role="tab" className={`tab ${location.pathname === "/register" ? "tab-active" : ""}`} to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Tabs;



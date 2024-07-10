import Logo from "../common/Logo";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";


const Sidenav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    navigate("/");
  };

  return (
    <div className="navbar bg-neutral h-screen w-fit flex flex-col place-items-start p-6">
      <div className="flex flex-row">
        <button className="btn btn-square btn-ghost sm:hidden visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <Logo />
      </div>
      <div className="navContents w-full flex flex-col gap-4 mt-10 place-items-start h-full">
        <div className="status flex flex-row content-center gap-4 bg-slate-600 w-full rounded p-2">
          <Avatar />
          <p className="my-auto">Username</p>
        </div>
        <div className="actions w-full">
          <ul>
            <li>
              <button onClick={handleLogout} className="btn w-full">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

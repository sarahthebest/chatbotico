import Logo from "../common/Logo";
import Avatar from "./Avatar";

const Sidenav = () => {
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
      <div className="divider mt-0"></div>
      <div className="navContents flex flex-col gap-4 place-items-start justify-between h-full">
        <div className="status flex flex-row content-center gap-4">
          <Avatar />
          <p>ONLINE!!!</p>
        </div>
        <div className="actions">
          <ul>
            <li>
              <button className="btn">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

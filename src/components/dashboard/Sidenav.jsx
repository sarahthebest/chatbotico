import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../../hooks/users";

const Sidenav = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    navigate("/");
  };

  useEffect(() => {

    fetchUserDetails()
      .then((data) => {
        setUsername(data.username);
      })
      .catch((err) => {
        console.error("Error fetching username:", err);
      });
  }, []);

  return (
    <div className={`nav  flex flex-col bg-neutral place-items-start w-full md:w-fit z-10 p-4  ${visible ? 'absolute' : 'relative'}`}>
      <button onClick={() => setVisible((prev) => !prev)}>
        <RxHamburgerMenu size="42px" className="visible md:hidden"/>
      </button>
      <div className={`navContents flex-col gap-4 place-items-start h-fit ${visible ? 'flex' : 'hidden md:flex'}`}>
        <div className="status flex flex-row content-center gap-4 bg-slate-600 w-full rounded p-2">
          <Avatar />
          <p className="my-auto">{username}</p>
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


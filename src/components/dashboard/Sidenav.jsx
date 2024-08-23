import { useState } from "react";
import Avatar from "./Avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { CiLogout, CiUser } from "react-icons/ci";

const Sidenav = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.user;

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user");
        navigate("/");
    };

    const profileClick = () => {
        navigate("/profile");
    };

    return (
        <div
            className={`nav  flex flex-col bg-neutral place-items-start w-full md:w-fit z-10 p-4
                 ${visible ? "absolute" : "relative"}`}
        >
            <button onClick={() => setVisible((prev) => !prev)}>
                <RxHamburgerMenu size="42px" className="visible md:hidden" />
            </button>
            <div
                className={`navContents pt-2 flex-col gap-4 place-items-start h-fit ${
                    visible ? "flex" : "hidden md:flex"
                }`}
            >
                <div className="status flex flex-row gap-2 w-full" >
                    <Avatar />
                    <p className="font-light text-lg">{username}</p>
                </div>
                <div className="actions w-full">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <button
                                onClick={profileClick}
                                className="btn w-full flex-no-wrap flex"
                            >
                                <CiUser size={20} color="white" />
                                Profile
                            </button>
                        </li>
                        <li className="flex">
                            <button
                                onClick={handleLogout}
                                className="btn w-full"
                            >
                                <CiLogout size={20} color="white" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;

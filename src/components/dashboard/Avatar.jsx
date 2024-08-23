import { useEffect, useState } from "react";

const Avatar = () => {
    const [displayAvatar, setDisplayAvatar] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("auth-token");

    useEffect(() => {
        if (user.avatar !== "") {
            setDisplayAvatar(user.avatar);
        }
        else {
            setDisplayAvatar("/default.png");
        }
    }, [token, user]);

    return (
        <div className="avatarWrapper">
            <img className="avatar w-20" src={displayAvatar} alt="Avatar image" />
        </div>
    );
};

export default Avatar;

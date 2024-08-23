import { useEffect, useState } from "react";
import { fetchUserDetails } from "../../hooks/users";

const Avatar = ({fakeAvatar}) => {
    const [displayAvatar, setDisplayAvatar] = useState("/default.png");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const token = localStorage.getItem("auth-token");

    useEffect(() => {
        fetchUserDetails(token, userId)
            .then((data) => {
                setDisplayAvatar(data[0].avatar);
            })
            .catch((err) => {
                console.error("Error fetching avatar:", err);
            });
    }, [token, userId, user]);

    return (
        <div className="avatarWrapper">
            <img className="avatar w-20" src={displayAvatar} alt="Avatar image" />
        </div>
    );
};

export default Avatar;

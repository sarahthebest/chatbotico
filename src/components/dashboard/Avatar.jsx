import { useEffect, useState } from "react";
import { fetchUserDetails } from "../../hooks/users";

const Avatar = ({ userId, token }) => {
    const [avatar, setAvatar] = useState("public/img/default.png");

    useEffect(() => {
        fetchUserDetails(token, userId)
            .then((data) => {
                setAvatar(data[0].avatar);
            })
            .catch((err) => {
                console.error("Error fetching avatar:", err);
            });
    }, [token, userId]);

    return (
        <div className="avatarWrapper">
            <img className="avatar w-20" src={avatar} alt="Avatar image" />
        </div>
    );
};

export default Avatar;

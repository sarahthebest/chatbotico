import { useEffect, useState } from "react";
import { fetchUserDetails } from "../../hooks/users";

const Avatar = () => {
    const [avatar, setAvatar] = useState("src/assets/img/default.png");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = (localStorage.getItem('auth-token'));
        const userId = user.id;

        fetchUserDetails(token, userId)
            .then((data) => {
                console.log(data[0].avatar);
                setAvatar(data[0].avatar);
            })
            .catch((err) => {
                console.error("Error fetching avatar:", err);
            });
    }, []);

    return (
        <div className="avatarWrapper">
            <img className="avatar w-20" src={avatar} alt="Avatar image" />
        </div>
    );
};

export default Avatar;

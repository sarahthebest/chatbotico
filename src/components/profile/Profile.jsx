import Sidenav from "../dashboard/Sidenav";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import AvatarEdit from "./AvatarEdit";
import UsernameEdit from "./UsernameEdit";
import PasswordEdit from "./PasswordEdit";
import EmailEdit from "./EmailEdit";
import { useState } from "react";
import { updateUserDetails } from "../../hooks/users";

const Profile = ({ handleLogout }) => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(
        JSON.parse(localStorage.getItem("user")).user
    );
    const [email, setEnail] = useState(
        JSON.parse(localStorage.getItem("user")).email
    );
    const [password, setPassword] = useState(
        JSON.parse(localStorage.getItem("user")).password
    );
    const [avatar, setAvatar] = useState(
        JSON.parse(localStorage.getItem("user")).avatar
    );

    const userIsEditing = async () => {
        if (isEditing) {
            const token = localStorage.getItem("auth-token");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            const updatedData = {
                user: username,
                email: email,
                password: password,
            };
            try {
                const updatedUser = await updateUserDetails(
                    token,
                    userId,
                    updatedData
                );
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setIsEditing(false);
            } catch (error) {
                console.error("Failed to update user details:", error);
            }
        } else {
            setIsEditing(true);
        }
    };

    return (
        <div className="profile">
            <div className="flex flex-col md:flex-row h-screen">
                <Sidenav handleLogout={handleLogout} />
                <div className="profileContent flex flex-col p-2 md:p-8 gap-4">
                    <div className="heading">
                        <h1 className="text-4xl mb-2 font-semibold">Edit profile</h1>
                        <button
                            className="flex flex-row gap-1"
                            onClick={() => navigate(-1)}
                        >
                            <IoChevronBackOutline size={24} /> Return to
                            dashboard
                        </button>
                    </div>
                    <div className="editable flex flex-col gap-6">
                        <AvatarEdit isEditing={isEditing} />
                        <div className="accountInfo w-full">
                            <h1 className="text-2xl font-semibold mb-4">
                                Personal information
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 md:grid-rows-1 gap-6 bg-slate-700 p-10 rounded shadow">
                                <div className="grid-item flex flex-col gap-4 rounded w-full">
                                    <h2 className="text-xl">Username</h2>
                                    <input
                                        type="text"
                                        placeholder={username}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>                                        <div className="grid-item flex flex-col gap-4 rounded">
                                    <h2 className="text-xl">Password</h2>
                                    <input
                                        type="text"
                                        placeholder={password}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="grid-item flex flex-col gap-4 rounded">
                                    <h2 className="text-xl">Email</h2>
                                    <input
                                        type="text"
                                        placeholder={email}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={userIsEditing}
                            className={`w-fit btn ${isEditing ? "btn-success" : ""
                                }`}
                        >
                            {isEditing ? "Save Changes" : "Edit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

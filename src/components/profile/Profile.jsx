import Sidenav from "../dashboard/Sidenav";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Avatar from "../dashboard/Avatar";
import { useState, useEffect } from "react";
import { fetchUserDetails, updateUserDetails, deleteUser } from "../../hooks/users";

const Profile = ({ handleLogout }) => {
    const token = localStorage.getItem("auth-token");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user?.user || ""); 
    const [password, setPassword] = useState(user?.password || "");
    const [email, setEmail] = useState(user?.email || "");

    const fetchUpdatedUserDetails = async () => {
        try {
            const userId = user.id;
            const userDetails = await fetchUserDetails(token, userId);
            const updatedUser = userDetails[0];
            
            const mergedUser = { ...user, ...updatedUser };

            localStorage.setItem("user", JSON.stringify(mergedUser));

            setUser(mergedUser);
        } catch (error) {
            console.error("Error fetching updated user details:", error);
        }
    };

    const handleAvatar = async () => {
        const avatarUrl = prompt("Please enter a URL");
        if (!avatarUrl) return; 

        const userId = user.id;
        const updatedData = { avatar: avatarUrl };
        try {
            await updateUserDetails(token, userId, updatedData);
            await fetchUpdatedUserDetails();
        } catch (error) {
            console.error("Failed to update user details:", error);
        }
    };

    const removeAvatar = async () => {
        const userId = user.id;
        const updatedData = { avatar: "" };
        try {
            await updateUserDetails(token, userId, updatedData);
            await fetchUpdatedUserDetails();
        } catch (error) {
            console.error("Failed to update user details:", error);
        }
    };

    const handleUserDeletion = () => {
        if (confirm("Are you sure you want to delete your account?")) {
            const userId = user.id;
            deleteUser(token, userId);
            localStorage.clear();
            navigate("/");
        }
    };

    const userIsEditing = async () => {
        if (isEditing) {
            const userId = user.id;
            const updatedData = {
                user: username,
                email: email,
                password: password,
            };
            try {
                await updateUserDetails(token, userId, updatedData);
                setIsEditing(false);
                await fetchUpdatedUserDetails();
            } catch (error) {
                console.error("Failed to update user details:", error);
            }
        } else {
            setIsEditing(true);
        }
    };

    useEffect(() => {
        if (user) {
            setUsername(user.user);
            setEmail(user.email);
            setPassword(user.password);
        }
    }, [user]);

    return (
        <div className="profile">
            <div className="flex flex-col md:flex-row h-screen">
                <Sidenav handleLogout={handleLogout} />
                <div className="profileContent flex flex-col p-2 md:p-8 gap-4 w-full">
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
                        <div className="avatarEdit flex flex-col gap-4 mb-4 bg-slate-700 p-6 rounded shadow">
                            <h1 className="text-2xl font-semibold">Avatar image</h1>
                            <div className="wrapper flex flex-row">
                                <div className="avatarText">
                                    <Avatar />
                                    <p>Link to a new image.</p>
                                </div>
                                <div className="avatarActions flex flex-row gap-4">
                                    <button onClick={handleAvatar} className="btn">
                                        Change image
                                    </button>
                                    <button onClick={removeAvatar} className="btn btn-warning">
                                        Delete image
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="accountInfo w-full">
                            <h1 className="text-2xl font-semibold mb-4">Personal information</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 md:grid-rows-1 gap-6 bg-slate-700 p-10 rounded shadow">
                                <div className="grid-item flex flex-col gap-4 rounded w-full">
                                    <h2 className="text-xl">Username</h2>
                                    <input
                                        type="text"
                                        value={username}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="grid-item flex flex-col gap-4 rounded">
                                    <h2 className="text-xl">Password</h2>
                                    <input
                                        type="password"
                                        value={password}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="grid-item flex flex-col gap-4 rounded">
                                    <h2 className="text-xl">Email</h2>
                                    <input
                                        type="email"
                                        value={email}
                                        className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={userIsEditing} className={`w-fit btn ${isEditing ? "btn-success" : ""}`}>
                            {isEditing ? "Save Changes" : "Edit"}
                        </button>
                        <button onClick={handleUserDeletion} className="w-fit btn btn-warning">
                            Delete account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

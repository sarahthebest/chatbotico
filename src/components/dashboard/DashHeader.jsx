import { useState } from "react";
import { writeMessage } from "../../hooks/messages";
import Logo from "../common/Logo";
import { inviteUser, fetchUsers, fetchUserDetails } from "../../hooks/users";

const DashHeader = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [invitedUser, setInvitedUser] = useState("");
    const token = localStorage.getItem("auth-token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            setError("Message can't be empty!");
        } else {
            try {
                await writeMessage(text);
                console.log("Message sent successfully!");
                setText("");
                setError("");
            } catch (err) {
                console.error(err);
                setError(err.message || "Failed to send message");
            }
        }
    };

    const handleInvite = async (e) => {
        e.preventDefault();

        if (invitedUser.trim() === "") {
            setError("Empty field");
            return;
        }
        try {
            const users = await fetchUsers(token);
            const matchedUser = users.find(
                (user) =>
                    user.username.toLowerCase() === invitedUser.toLowerCase()
            );
            if (matchedUser) {
                const userId = matchedUser.userId;
                await inviteUser(token, userId);
                setText("");
                setError("");
                setSuccess("Invite sent!");
                setTimeout(() => {
                    setSuccess("");
                }, 2000);
            } else {
                setError("User not found. Check the username.");
            }
        } catch (err) {
            console.error("Error fetching users or sending invite:", err);
            setError(err.message || "Failed to send invite");
        }
    };

    return (
        <div className="Dashheader flex flex-row w-full py-4 ps-4 border-b border-neutral justify-between">
            <Logo />
            <div className="buttonsWrapper">
                <button
                    className="btn w-fit me-4 bg-accent hover:bg-secondary hover:text-neutral-900"
                    onClick={() =>
                        document.getElementById("messageModal").showModal()
                    }
                >
                    Write
                </button>
                <button
                    className="btn w-fit me-4 bg-accent hover:bg-secondary hover:text-neutral-900"
                    onClick={() =>
                        document.getElementById("inviteModal").showModal()
                    }
                >
                    Add friend
                </button>
            </div>
            <dialog
                id="messageModal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box flex flex-col gap-4">
                    <h3 className="font-bold ">Write your message</h3>
                    <label className="textarea textarea-bordered flex items-center">
                        <textarea
                            name="message"
                            id="message"
                            className="grow bg-transparent"
                            placeholder="Write your message..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </label>
                    {error && (
                        <div className="text-black bg-red-500 p-2 rounded-md">
                            {error}
                        </div>
                    )}
                    <div className="modal-action">
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <form method="dialog">
                            <button className="btn btn-warning">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog
                id="inviteModal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box flex flex-col gap-4">
                    <h3 className="font-bold ">Add a friend</h3>
                    <label className="bg-transparent form-control flex">
                        <div className="label">
                            <span className="label-text">Username or ID</span>
                        </div>
                        <input
                            name="recipient"
                            id="recipient"
                            className="grow bg-transparent input-bordered input "
                            placeholder="Recipient"
                            value={invitedUser}
                            onChange={(e) => setInvitedUser(e.target.value)}
                        />
                    </label>
                    {error && (
                        <div className="text-black bg-red-500 p-2 rounded-md">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="text-black bg-green-500 p-2 rounded-md">
                            {success}
                        </div>
                    )}
                    <div className="modal-action">
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={handleInvite}
                        >
                            Submit
                        </button>
                        <form method="dialog">
                            <button className="btn btn-warning">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DashHeader;

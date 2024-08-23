import { useState } from "react";
import Avatar from "../dashboard/Avatar";

const Message = ({ message, avatar, username, date, onDelete, id }) => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const displayUsername = username || user.user;
    const displayMessage = message || "Default message";  
    const displayAvatar = avatar || "https://i.pravatar.cc/100?img=14";  
    const [modalOpen, setModalOpen] = useState(false);

    const dateFormatter = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    };

    const deleteMessage = () => {
        onDelete(id);
        closeModal();
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="chatBubble my-4 w-full flex flex-row justify-between">
            <div className="messageWrapper flex flex-row gap-4">
                <Avatar fakeAvatar={displayAvatar} alt={`${displayUsername}'s avatar`} />

                <div
                    className="messageContent flex flex-col justify-between cursor-default"
                    onClick={openModal}
                >
                    <div className="chat-bubble shadow-lg max-w-72 text-wrap break-all flex hover:bg-slate-500">
                        {displayMessage}
                    </div>
                    <p className="text-xs">{dateFormatter(date)}</p>
                </div>
            </div>

            {modalOpen && (
                <dialog open className="modal">
                    <div className="modal-box flex flex-col gap-4">
                        <h3 className="text-2xl">{displayUsername} says:</h3>
                        <div className="messageWrapper flex flex-row gap-4">
                            <Avatar avatar={displayAvatar} alt={`${displayUsername}'s avatar`} />
                            <div className="messageContent flex flex-col justify-between cursor-default">
                                <div className="chat-bubble max-w-72 text-wrap break-all flex">
                                    {displayMessage}
                                </div>
                                <p className="text-xs">{dateFormatter(date)}</p>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn w-fit join-item"
                                type="button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-warning w-fit join-item"
                                type="button"
                                onClick={deleteMessage}
                            >
                                Delete message
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Message;

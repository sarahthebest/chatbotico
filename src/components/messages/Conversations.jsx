import { useEffect, useState } from "react";
import { fetchConversations, fetchMessages } from "../../hooks/messages";

const Conversations = () => {
    const [invites, setInvites] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const parsedInvites = JSON.parse(user.invite || "[]");
        setInvites(parsedInvites);
    }, []);

    return (
        <div className="fakeMessages px-2 md:px-4 w-full flex flex-col">
            {invites.length === 0 ? (
                <div className="noMessages flex flex-col w-fit my-auto">
                    <img
                        src="/emptyChats.svg"
                        className="w-1/2 mx-auto"
                        alt="No invites"
                    />
                    <p className="mx-auto">You have no invites</p>
                </div>
            ) : (
                invites.map((invite) => (
                    <div key={invite.conversationId} className="invitations">
                        <p>{invite.username}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Conversations;


import { useEffect, useState } from "react";
import Conversation from "./Conversations";
import { fetchMessages } from "../../hooks/messages";

const ConversationTab = () => {
    const [invites, setInvites] = useState([]);
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const parsedInvites = JSON.parse(user.invite || "[]");
        setInvites(parsedInvites);

        const fetchAllMessages = async () => {
            const messagePromises = parsedInvites.map(invite =>
                fetchMessages(invite.conversationId).then(data => ({
                    conversationId: invite.conversationId,
                    messages: data,
                }))
            );
            try {
                const results = await Promise.all(messagePromises);
                const messagesObject = results.reduce((acc, { conversationId, messages }) => {
                    acc[conversationId] = messages;
                    return acc;
                }, {});
                setMessages(messagesObject);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchAllMessages();
    }, []);


    if (invites.length === 0) {
        return (
            <div className="noMessages flex flex-col w-fit my-auto">
                <img
                    src="/emptyChats.svg"
                    className="w-1/2 mx-auto"
                    alt="No invites"
                />
                <p className="mx-auto">You have no invites</p>
            </div>
        );
    }

    return (
        <div role="tablist" className="tabs tabs-bordered w-full md:w-2/3 mx-auto h-full content-start overflow-hidden">
            {invites.map((invite, index) => (
                <>
                    <input
                        type="radio"
                        name="conversationTabs"
                        role="tab"
                        className="tab w-full text-xl" 
                        id={`tab-${invite.conversationId}`} 
                        aria-label={invite.username}
                        defaultChecked={index === 0} 
                    />
                    <div
                        role="tabpanel"
                        className="tab-content ps-4 w-full h-full"
                        id={`tabpanel-${invite.conversationId}`} 
                        aria-labelledby={`tab-${invite.conversationId}`}
                    >
                        <Conversation 
                            inviter={invite.username} 
                            conversationId={invite.conversationId}
                            messages={messages[invite.conversationId]} // Pass messages to Conversation
                        />
                    </div>
                    </>
            ))}
        </div>
    );
};

export default ConversationTab;

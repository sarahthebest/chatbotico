import Message from "./Message";
import { fetchMessages } from "../../hooks/messages";
import { useEffect, useState } from "react";
import { deleteMessage as deleteMessageAPI } from "../../hooks/messages";

const ChatMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages()
            .then((data) => {
                setMessages(data);
            })
            .catch((err) => {
                console.error("Error fetching messages:", err);
            });
    }, [messages]);

    const deleteMessage = async (msgId) => {
        try {
            await deleteMessageAPI(msgId);
            setMessages(messages.filter((message) => message.id !== msgId));
        } catch (err) {
            console.error("Error deleting message:", err);
        }
    };

    return (
        <div
            className="messages chat chat-start flex flex-col w-full px-2 md:px-4
    md:w-1/2"
        >
            {messages.length === 0 ? (
                <div className="noMessages flex flex-col w-fit my-auto">
                    <img
                        src="/emptyChats.svg"
                        className="w-1/2 mx-auto"
                        alt="Undraw image."
                    />
                    <p className="mx-auto">Start chatting</p>
                </div>
            ) : (
                messages.map((message) => (
                    <Message
                        key={message.id}
                        id={message.id}
                        message={message.text}
                        date={message.createdAt}
                        onDelete={deleteMessage}
                    />
                ))
            )}
        </div>
    );
};

export default ChatMessages;

import { useEffect, useState, useCallback } from "react";
import Message from "./Message";
import { deleteMessage as deleteMessageAPI, writeMessage, fetchMessages } from "../../hooks/messages";

const Conversation = ({ inviter, conversationId }) => {
    const [text, setText] = useState("");
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);

    const loadMessages = useCallback(async () => {
        try {
            const data = await fetchMessages(conversationId);
            setMessages(data);
        } catch (err) {
            console.error("Error fetching messages:", err);
            setError(err.message);
        }
    }, [conversationId]);

    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newMessage = {
                message: text,
                username: inviter,
                date: new Date().toISOString(),
            };
            await writeMessage(text, conversationId);
            setText("");
            setError(null);
            await loadMessages();
        } catch (err) {
            console.error("Failed to send message:", err);
            setError(err.message);
        }
    };

    const deleteMessage = async (msgId) => {
        try {
            await deleteMessageAPI(msgId);
            setMessages(messages.filter((message) => message.id !== msgId));
        } catch (err) {
            console.error("Error deleting message:", err);
        }
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="messageWrapper overflow-y-scroll">
                {messages.length === 0 ? (
                    <div className="noMessages flex flex-col w-fit m-auto justify-items-center">
                        <img src="/emptyChats.svg" className="w-1/3 m-auto" alt="Undraw image." />
                        <p className="mx-auto">Start chatting</p>
                    </div>
                ) : (
                    messages.map((message, index) => (
                        <Message
                        key={index}
                        inviteMsg={message.text}        
                        inviteDate={message.createdAt}  
                        inviteId={message.id}           
                        onDelete={deleteMessage}
                    />
                    ))
                )}
            </div>
            <div className="formWrapper w-2/3 mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-row gap-4 pe-4">
                    <input
                        type="text"
                        placeholder="Write your message..."
                        className="input input-bordered w-full grow flex-1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn btn-success" type="submit">
                        Send
                    </button>
                </form>
                {error && (
                    <div className="text-black bg-red-500 mt-2 p-2 rounded-md">
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Conversation;

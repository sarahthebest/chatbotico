import Message from "./Message";
import { fetchMessages } from "../../hooks/messages";
import { useEffect, useState } from "react";

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

  return (
    <div className="messages chat chat-start flex flex-col
    w-1/2">
      {messages.length === 0 ? (
        <div className="noMessages flex flex-col w-fit my-auto">
        <img
          src="public/img/emptyChats.svg"
          className="w-1/2 mx-auto"
          alt="Undraw image."
        />
        <p className="mx-auto">Start chatting</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <Message key={index} message={message.text} date={message.createdAt}/>
        ))
      )}
    </div>
  );
};

export default ChatMessages;

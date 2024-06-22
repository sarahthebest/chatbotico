import Message from "./Message";
import { fetchMessages } from "../../hooks/messages";
import { useEffect, useState } from "react";

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages()
      .then((data) => {
        setMessages(data);
        console.log(messages);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
      });
  }, []);

  return (
    <div className="messages chat chat-start flex flex-col
    w-1/2">
      {messages.length === 0 ? (
        <img
          src="src/assets/img/undraw_begin_chat_re_v0lw.svg"
          className="w-1/2"
          alt="Undraw image."
        />
      ) : (
        messages.map((message, index) => (
          <Message key={index} message={message.text} date={message.createdAt}/>
        ))
      )}
    </div>
  );
};

export default ChatMessages;

import Avatar from "./Avatar";

const Message = ({ message, date }) => {
  return (
    <div className="chatBubble my-4 gap-4 w-full flex flex-row">
      <Avatar />
      <div className="messageContent">
        <div className="chat-bubble">{message}</div>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Message;

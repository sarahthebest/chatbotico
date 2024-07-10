import Avatar from "./Avatar";

const Message = ({ message, date }) => {
  const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  };

  return (
    <div className="chatBubble my-4 gap-4 w-full flex flex-row">
      <Avatar />
      <div className="messageContent">
        <div className="chat-bubble">{message}</div>
        <p className="text-xs">{dateFormatter(date)}</p>
      </div>
    </div>
  );
};

export default Message;

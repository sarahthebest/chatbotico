import Avatar from "./Avatar";

const Message = ({ message, date }) => {
  const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const token = (localStorage.getItem('auth-token'));
  const userId = user.id;

  return (
    <div className="chatBubble my-4 gap-4 w-full flex flex-row">
      <Avatar userId={userId} token={token}/>
      <div className="messageContent">
        <div className="chat-bubble max-w-72 text-wrap break-all flex">{message}</div>
        <p className="text-xs">{dateFormatter(date)}</p>
      </div>
    </div>
  );
};

export default Message;

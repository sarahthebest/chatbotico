import { useState } from "react";
import Message from "./Message";

const FakeChat = () => {
    const [fakeChat, setFakeChat] = useState([{
        "text": "Tja tja, hur mår du?",
        "avatar": "https://i.pravatar.cc/100?img=14",
        "username": "Johnny",
        "conversationId": null
    },
    {
        "text": "Hallå!! Svara då!!",
        "avatar": "https://i.pravatar.cc/100?img=14",
        "username": "Johnny",
        "conversationId": null
    },
    {
        "text": "Sover du eller?! 😴",
        "avatar": "https://i.pravatar.cc/100?img=14",
        "username": "Johnny",
        "conversationId": null
    }
    ]);
    return (
        <div className="fakeMessages px-2 md:px-4 w-full flex flex-col w-full px-2 md:px-4">
            <p></p>
            {fakeChat.map((message, index) => (
                <Message
                    key={index}
                    message={message.text}
                    avatar={message.avatar}
                    username={message.username}
                    date={new Date()}
                />
            ))}

        </div>
    );
}

export default FakeChat;
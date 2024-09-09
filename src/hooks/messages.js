export async function fetchMessages(conversationId) {
    const token = localStorage.getItem("auth-token");

    const url = conversationId 
        ? `https://chatify-api.up.railway.app/messages?conversationId=${conversationId}` 
        : "https://chatify-api.up.railway.app/messages";

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log(res);

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to fetch messages");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Fetch Messages Error:", err);
        throw new Error(err.message || "Failed to fetch messages");
    }
}


export async function writeMessage(text, conversationId) {
    const token = localStorage.getItem("auth-token");

        try {
        const res = await fetch("https://chatify-api.up.railway.app/messages", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                conversationId,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to write message");
        }

        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(err.message || "Failed to write message");
    }
}

export async function deleteMessage(msgId) {
    const token = localStorage.getItem("auth-token");

    try {
        const res = await fetch(
            `https://chatify-api.up.railway.app/messages/${msgId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to delete message");
        }

        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(err.message || "Failed to delete message");
    }
}

export async function fetchConversations() {
    const token = localStorage.getItem("auth-token");

    try {
        const res = await fetch(
            "https://chatify-api.up.railway.app/conversations",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to fetch messages");
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Fetch Messages Error:", err);
        throw new Error(err.message || "Failed to fetch messages");
    }
}

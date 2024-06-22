export async function fetchMessages() {
  let token = localStorage.getItem("auth-token");

  try {
    const res = await fetch("https://chatify-api.up.railway.app/messages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

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
  let token = localStorage.getItem("auth-token");
  let user = localStorage.getItem("user");

  try {
    const res = await fetch("https://chatify-api.up.railway.app/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        conversationId
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


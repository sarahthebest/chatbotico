export async function registerUser({ email, username, password, avatar, csrfToken }) {
  const res = await fetch('https://chatify-api.up.railway.app/auth/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      username,
      password,
      avatar,
      csrfToken
    })
  });

  const responseText = await res.text(); 

  if (!res.ok) {
    try {
      const errorData = JSON.parse(responseText); 
      throw new Error(errorData.message || "Failed to register account");
    } catch (error) {
      throw new Error(responseText || "Failed to register account");
    }
  }

  return JSON.parse(responseText); 
}

export async function handleLogin({ username, password, csrfToken }) {
  try {
    const res = await fetch("https://chatify-api.up.railway.app/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        csrfToken
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Incorrect username or password. Try again.");
    }
    
    const data = await res.json();
    console.log("Response Data:", data);

    if (data && data.token) {
      localStorage.setItem('auth-token', data.token);
      return { token: data.token };
    } else {
      throw new Error("Unexpected response structure");
    }
  } catch (error) {
    console.error("Login Error:", error);
    throw new Error(error.message || "Incorrect username or password. Try again.");
  }
}
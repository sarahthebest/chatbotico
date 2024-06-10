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
      throw new Error(error.message || "Failed to sign in");
    }
    
    const data = await res.json();
    console.log(data);
    localStorage.setItem('auth-token', data.token);
    localStorage.setItem('user', JSON.stringify({
      id:data.user.id,
      username:data.user.username,
      avatar:data.user.avatar,
    }));
    console.log(user);
    return data.token;
  } catch (error) {
    console.error("Login Error:", error);
    throw new Error("Failed to sign in");
  }
}

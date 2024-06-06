// File: /src/hooks/auth.js

export default async function registerUser({ email, username, password, avatar, csrfToken }) {
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

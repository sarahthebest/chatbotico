import { useState, useEffect } from "react";
import { BsPerson, BsKey, BsCardImage, BsEnvelope } from "react-icons/bs";
import { registerUser } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(
          "https://chatify-api.up.railway.app/csrf",
          {
            method: "PATCH",
          }
        );
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (err) {
        setError("Failed to fetch CSRF token");
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await registerUser({ email, username, password, avatar, csrfToken });
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (err) {
      setError(err.message || "Failed to register account.");
    }
  };

  return (
    <div className="form mx-auto flex flex-col gap-4 rounded-md my-4">
      <label className="input input-bordered flex items-center gap-2 bg-neutral">
        <BsPerson />
        <input
          type="text"
          className="grow"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <BsKey />
        <input
          type="password"
          className="grow"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <BsEnvelope />
        <input
          type="text"
          className="grow"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

  <div className="flex flex-col w-full">
<label className="input input-bordered flex items-center gap-2 mt-0">
  <BsCardImage />
  <input
    type="text"
    id="avatarInput"
    className="grow"
    placeholder="Avatar"
    value={avatar}
    onChange={(e) => setAvatar(e.target.value)}
  />
</label>
  <label htmlFor="avatarInput" className="label-text mt-2">Link to a avatar image</label>
</div>

      {error && (
        <div className="text-black bg-error p-2 rounded-md">{error}</div>
      )}
      {success && (
        <div className="text-black bg-success p-2 rounded-md">{success}</div>
      )}
      <button
        className="btn hover:bg-accent
       hover:text-black w-fit mx-auto"
        onClick={handleSubmit}
      >
        Register Account
      </button>
    </div>
  );
};

export default RegisterForm;

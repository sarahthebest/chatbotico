import { useState, useEffect } from "react";
import { BsPerson, BsKey } from "react-icons/bs";
import { handleLogin } from "../../hooks/auth";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

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
      const token = await handleLogin({ username, password, csrfToken });
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="form container mx-auto flex flex-col gap-4 rounded-md my-4">
      <label className="input input-bordered flex items-center gap-2">
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
          type={showPassword ? "text" : "password"}
          className="grow"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="form-control mt-0">
        <label className="label cursor-pointer justify-normal gap-2">
          <span className="label-text">Show password</span>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="checkbox"
          />
        </label>
      </div>
      {error && (
        <div className="text-black bg-red-500 p-2 rounded-md">{error}</div>
      )}
      {success && (
        <div className="text-black bg-green-500 p-2 rounded-md">{success}</div>
      )}{" "}
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn hover:bg-accent hover:text-black w-fit mx-auto mt-2"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;

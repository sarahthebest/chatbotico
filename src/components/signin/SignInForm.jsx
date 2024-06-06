import { useState } from "react";
import { BsPerson, BsKey  } from "react-icons/bs";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form container mx-auto flex flex-col gap-4 rounded-md my-4">
      <label className="input input-bordered flex items-center gap-2">
        <BsPerson />
        <input type="text" className="grow" placeholder="Username" />
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
      <div className="form-control">
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
      <button className="btn hover:bg-accent hover:text-black w-fit mx-auto mt-2">Sign In</button>
    </div>
  );
};

export default RegisterForm;

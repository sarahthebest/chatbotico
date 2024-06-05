import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVpnKey } from "react-icons/md";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form container mx-auto flex flex-col gap-4 w-1/3 p-4 rounded my-4 bg-primary">
      <label className="input input-bordered flex items-center gap-2">
        <IoPersonOutline />
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <MdOutlineVpnKey />{" "}
        <input
          type={showPassword ? "text" : "password"}
          className="grow"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="form-control">
        <label className="label cursor-pointer justify-normal gap-2">
          <span className="label-text text-black">Show password</span>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="checkbox border-black"
          />
        </label>
      </div>
    </div>
  );
};

export default RegisterForm;

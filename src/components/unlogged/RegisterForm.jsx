import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVpnKey } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

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
          type="password"
          className="grow"
          value={password}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      <AiOutlineMail />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      <AiOutlineMail />
        <input type="text" className="grow" placeholder="Avatar" />
      </label>
    </div>
  );
};

export default RegisterForm;

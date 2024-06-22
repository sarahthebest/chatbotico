import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
      <Link to="/">
        <h1 className="font-bitmap text-white text-5xl bg-gradient-to-r from-indigo-300 to-indigo-700 bg-clip-text text-transparent w-fit">
        ChatBotico
      </h1>
      </Link>
     );
}
 
export default Logo;
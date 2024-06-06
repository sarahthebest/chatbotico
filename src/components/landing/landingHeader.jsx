import Logo from "../common/Logo";
import ThemeControl from "./ThemeControl";

const LandingHeader = () => {
  return (
    <div className="landingHeader w-full absolute z-50 px-10 pt-4 pb-4 bg-gradient-to-b from-secondary/20 to-transparent
     grid grid-rows-1 grid-cols-2">
      <Logo />
      <ThemeControl />
    </div>
  );
};

export default LandingHeader;

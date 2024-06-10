import Logo from "../common/Logo";
import ThemeControl from "../common/ThemeControl";

const LandingHeader = () => {
  return (
    <div className="landingHeader w-full absolute z-50 px-10 pt-4 pb-4
     grid grid-rows-1 grid-cols-2">
      <Logo />
      <ThemeControl />
    </div>
  );
};

export default LandingHeader;

import logo from "@/assets/imgs/Polygon.png";
import { LogoAdmin, LogoSimple, LogoUser } from "./styled";
import { LogoVariants } from "@/types/components/variants";

interface LogoProps {
  variant?: LogoVariants;
}

function Logo({ variant }: LogoProps) {
  switch (variant) {
    case "user":
      return (
        <LogoUser>
          <img src={logo} alt="Logo" />
          <h1>food explorer</h1>
        </LogoUser>
      );
    case "admin":
      return (
        <LogoAdmin>
          <img src={logo} alt="Logo" />
          <h1>food explorer</h1>
          <p>admin</p>
        </LogoAdmin>
      );
    case "simple":
      return (
        <LogoSimple>
          <img src={logo} alt="Logo" />
          <h1>food explorer</h1>
        </LogoSimple>
      );
    default:
      return (
        <LogoUser>
          <img src={logo} alt="Logo" />
          <h1>food explorer</h1>
        </LogoUser>
      );
  }
}

export default Logo;

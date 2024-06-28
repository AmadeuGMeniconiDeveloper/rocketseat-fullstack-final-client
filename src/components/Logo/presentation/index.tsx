import logo from "@/assets/imgs/Polygon.png";
import { Container } from "./styled";

function Logo() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h1>food explorer</h1>
    </Container>
  );
}

export default Logo;

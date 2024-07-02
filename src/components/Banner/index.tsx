import Image from "@/assets/imgs/Banner.png";
import { Container } from "./styled";
function Banner() {
  return (
    <Container>
      <img src={Image} alt="" />
      <span>
        <h1>Sabores inigualaveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </span>
    </Container>
  );
}

export default Banner;

import Image from "@/assets/imgs/Banner.png";
import { Container } from "./styled";
function Banner() {
  return (
    <Container>
      <img src={Image} alt="Banner" />
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  );
}

export default Banner;

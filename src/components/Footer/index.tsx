import Logo from "../Logo";
import { Container } from "./styled";

function Footer() {
  return (
    <Container>
      <Logo variant="simple" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}

export default Footer;

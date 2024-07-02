import Logo from "@/components/Logo";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { Container } from "./styled";

function SignUp() {
  return (
    <Container>
      <Logo />
      <form>
        <InputText
          title="Seu nome"
          id="name"
          type="name"
          placeholder="Maria da Silva"
          required={true}
        />
        <InputText
          title="Email"
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          required={true}
        />
        <InputText
          title="Senha"
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
          required={true}
        />
        <Button type="submit">Criar conta</Button>
        <a href="#">Ja tenho uma conta</a>
      </form>
    </Container>
  );
}

export default SignUp;

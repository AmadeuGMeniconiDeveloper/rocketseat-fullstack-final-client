import Logo from "@/components/Logo/presentation";
import InputText from "@/components/InputText/presentation";
import Button from "@/components/Button/presentation";

import { Container } from "./styled";

function SignIn() {
  return (
    <Container>
      <Logo />
      <form>
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
        <Button type="submit">Entrar</Button>
        <a href="#">Criar uma conta</a>
      </form>
    </Container>
  );
}

export default SignIn;

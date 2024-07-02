import Logo from "@/components/Logo";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { Container } from "./styled";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container>
      <Logo variant="user" />
      <form>
        <InputText
          label="Seu nome"
          id="name"
          type="name"
          placeholder="Maria da Silva"
          required={true}
        />
        <InputText
          label="Email"
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          required={true}
        />
        <InputText
          label="Senha"
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
          required={true}
        />
        <Button type="submit">Criar conta</Button>
        <Link to="/signin">Ja possui uma conta?</Link>
      </form>
    </Container>
  );
}

export default SignUp;

import Logo from "@/components/Logo";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { Container } from "./styled";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign In");
    signIn();
  };
  return (
    <Container>
      <Logo />
      <form onSubmit={handleSignIn}>
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

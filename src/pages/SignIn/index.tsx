import { useContext } from "react";

import Logo from "@/components/Logo";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { AuthContext } from "@/context/AuthContext";

import { Container } from "./styled";

import { User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign In");
    signIn();
  };
  return (
    <Container>
      <Logo variant="user" />
      <form onSubmit={handleSignIn}>
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
        <Button type="submit">Entrar</Button>
        <Link to="/signup">Criar uma conta</Link>
      </form>
    </Container>
  );
}

export default SignIn;

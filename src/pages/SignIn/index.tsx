import { useContext, useState } from "react";

import Logo from "@/components/Logo";
import Label from "@/components/Label";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { AuthContext } from "@/contexts/AuthContext";

import { Container } from "./styled";

import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <Container>
      <Logo variant="user" />
      <form onSubmit={handleSignIn}>
        <Label>
          Email
          <InputText
            id="email"
            type="email"
            placeholder="exemplo@exemplo.com.br"
            required={true}
            onChange={event => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Senha
          <InputText
            id="password"
            type="password"
            placeholder="No minimo 6 caracteres"
            required={true}
            onChange={event => setPassword(event.target.value)}
          />
        </Label>
        <Button type="submit">Entrar</Button>
        <Link to="/signup">Criar uma conta</Link>
      </form>
    </Container>
  );
}

export default SignIn;

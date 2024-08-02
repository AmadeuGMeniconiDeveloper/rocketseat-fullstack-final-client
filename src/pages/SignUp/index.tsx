import Logo from "@/components/Logo";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { Container } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "@/config/api";
import Label from "@/components/Label";
import Select from "@/components/InputSelect";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "admin">("customer");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await api.post("/users", {
        name,
        email,
        password,
        role,
      });

      alert("Conta criada com sucesso!");
      navigate("/signin");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Logo variant="user" />
      <form>
        <Label>
          Nome
          <InputText
            id="name"
            type="name"
            placeholder="Maria da Silva"
            required={true}
            onChange={event => setName(event.target.value)}
          />
        </Label>
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
        <Label>
          Tipo de conta
          <Select
            id="role"
            options={["customer", "admin"]}
            onChange={event =>
              setRole(event.target.value as "customer" | "admin")
            }
          >
            <option value="customer">Cliente</option>
            <option value="admin">Administrador</option>
          </Select>
        </Label>
        <Button type="button" onClick={handleSignUp}>
          Criar conta
        </Button>
        <Link to="/signin">Ja possui uma conta?</Link>
      </form>
    </Container>
  );
}

export default SignUp;

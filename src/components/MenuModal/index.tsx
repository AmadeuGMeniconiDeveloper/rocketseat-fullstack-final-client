import Button from "../Button";

import { X } from "@phosphor-icons/react";
import { Container } from "./styled";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import InputText from "../InputText";
import { AuthContext } from "@/context/AuthContext";

function MenuModal() {
  const { closeMenu } = useContext(ModalContext);
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    closeMenu();
    signOut();
  };

  return (
    <Container>
      <header>
        <Button variant="ghost" onClick={closeMenu}>
          <X size={24} />
          Menu
        </Button>
      </header>
      <div>
        <InputText placeholder="Busque por pratos ou ingredientes" />
        <Button variant="ghost" onClick={handleSignOut}>
          Sair
        </Button>
      </div>
    </Container>
  );
}

export default MenuModal;

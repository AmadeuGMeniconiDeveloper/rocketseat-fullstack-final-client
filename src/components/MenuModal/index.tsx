import Button from "../Button";

import { X } from "@phosphor-icons/react";
import { Container } from "./styled";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";

function MenuModal() {
  const { closeMenu } = useContext(ModalContext);

  return (
    <Container>
      <header>
        <Button variant="ghost" onClick={closeMenu}>
          <X size={24} />
          Menu
        </Button>
      </header>
    </Container>
  );
}

export default MenuModal;

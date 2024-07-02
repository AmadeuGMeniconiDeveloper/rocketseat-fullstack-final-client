import { ModalContext } from "@/context/ModalContext";
import Button from "../Button";
import CartButton from "../CartButton";
import Logo from "../Logo";

import { Container } from "./styled";

import { List, Receipt } from "@phosphor-icons/react";
import { useContext } from "react";

function Header() {
  const { openMenu } = useContext(ModalContext);

  return (
    <Container>
      <Button variant="ghost" onClick={openMenu}>
        <List size={24} />
      </Button>
      <Logo variant="admin" />
      <CartButton numberOfItems={0} variant="ghost">
        <Receipt size={24} />
      </CartButton>
    </Container>
  );
}

export default Header;

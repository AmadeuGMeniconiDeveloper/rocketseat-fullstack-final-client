import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";

import Button from "../Button";
import CartButton from "../CartButton";
import Logo from "../Logo";

import { Container } from "./styled";

import { List, Receipt } from "@phosphor-icons/react";

interface ModalContextProps {
  openMenu: () => void;
}

function Header({ openMenu }: ModalContextProps) {
  const { isAdmin } = useContext(AuthContext);

  return (
    <Container>
      <Button variant="ghost" onClick={openMenu}>
        <List size={24} />
      </Button>

      {isAdmin ? (
        <Logo variant="admin" />
      ) : (
        <>
          <Logo variant="user" />
          <CartButton numberOfItems={0} variant="ghost">
            <Receipt size={24} />
          </CartButton>
        </>
      )}
    </Container>
  );
}

export default Header;

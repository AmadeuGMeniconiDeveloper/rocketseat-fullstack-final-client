import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";

import CartButton from "../CartButton";
import Logo from "../Logo";

import { Container } from "./styled";

import { List, Receipt } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface HeaderProps {
  openMenu: () => void;
}

function Header({ openMenu }: HeaderProps) {
  const { isAdmin } = useContext(AuthContext);

  const navigate = useNavigate();

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
          <CartButton variant="ghost" onClick={() => navigate("/cart")}>
            <Receipt size={24} />
          </CartButton>
        </>
      )}
    </Container>
  );
}

export default Header;

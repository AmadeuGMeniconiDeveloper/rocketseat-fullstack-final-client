import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

import Button from "../Button";
import InputText from "../InputText";

import { Container } from "./styled";

import { MagnifyingGlass, X } from "@phosphor-icons/react";

interface MenuModalProps {
  closeMenu: () => void;
}

function MenuModal({ closeMenu }: MenuModalProps) {
  const { signOut, auth, isAdmin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    closeMenu();
    signOut();
  };

  const handleNavigateToNew = () => {
    closeMenu();
    navigate("/new");
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
        <InputText
          leftIcon={<MagnifyingGlass size={24} />}
          rightIcon={<X size={24} />}
          placeholder="Busque por pratos ou ingredientes"
        />
        {isAdmin && (
          <Button variant="ghost" onClick={handleNavigateToNew}>
            Novo prato
          </Button>
        )}
        <Button variant="ghost" onClick={handleSignOut}>
          Sair
        </Button>
      </div>
    </Container>
  );
}

export default MenuModal;

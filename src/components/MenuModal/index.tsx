import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

import Button from "../Button";
import InputText from "../InputText";

import { Container, MessageBox, NavigationList, SearchList } from "./styled";

import { MagnifyingGlass, X, Sun, Moon } from "@phosphor-icons/react";
import { api } from "@/config/api";
import { Food } from "@/types/api";
import { useTheme } from "styled-components";

interface MenuModalProps {
  closeMenu: () => void;
  toogleTheme: () => void;
}

function MenuModal({ closeMenu, toogleTheme }: MenuModalProps) {
  const { signOut, isAdmin } = useContext(AuthContext);
  const { MODE } = useTheme();

  const [productList, setProductList] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(MODE);

  const navigate = useNavigate();

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  const hanldeFavorites = () => {
    closeMenu();
    navigate("/favorites");
  };

  const handleNew = () => {
    closeMenu();
    navigate("/new");
  };

  const handleToggleTheme = () => {
    toogleTheme();

    if (toggleSwitch === "light") {
      setToggleSwitch("dark");
    } else {
      setToggleSwitch("light");
    }
  };

  const handleSearchbarOnChange = (value: string) => {
    const trimedValue = value.trimStart();

    setSearchInput(trimedValue);
  };

  const renderFoundProducts = productList.map(product => (
    <li key={product.id}>
      <Button
        variant="ghost"
        onClick={() => navigate(`/details/${product.id}`)}
      >
        {product.name}
      </Button>
    </li>
  ));

  useEffect(() => {
    const searchProduct = async () => {
      setIsLoading(true);
      if (searchInput === "") {
        setProductList([]);
        return;
      }

      const { data } = await api.get(
        `/products/search/${searchInput.toLowerCase()}`
      );

      setProductList(data);
      setIsLoading(false);
    };

    const timeout = setTimeout(() => {
      searchProduct();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <Container>
      <header>
        <Button variant="ghost" onClick={closeMenu}>
          <X size={24} />
          Menu
        </Button>
        <Button variant="ghost" onClick={handleToggleTheme}>
          {toggleSwitch === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </Button>
      </header>
      <div>
        <InputText
          value={searchInput}
          onChange={e => handleSearchbarOnChange(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Busque por pratos ou ingredientes"
          leftIcon={<MagnifyingGlass size={24} />}
        />
        {isInputFocused && searchInput ? (
          productList.length ? (
            <SearchList>{renderFoundProducts}</SearchList>
          ) : isLoading ? (
            <MessageBox>
              <p>Carregando...</p>
            </MessageBox>
          ) : (
            <MessageBox>
              <p>Produto nao encontrado</p>
            </MessageBox>
          )
        ) : (
          <NavigationList>
            {isAdmin ? (
              <a onClick={handleNew}>Novo prato</a>
            ) : (
              <a onClick={hanldeFavorites}>Favoritos</a>
            )}

            <a onClick={handleSignOut}>Sair</a>
          </NavigationList>
        )}
      </div>
    </Container>
  );
}

export default MenuModal;

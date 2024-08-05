import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import MenuModal from "../MenuModal";

import { Container } from "./styled";

interface LayoutProps {
  toggleTheme: () => void;
}

function Layout({ toggleTheme }: LayoutProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <Container>
      {menuIsOpen ? (
        <MenuModal closeMenu={closeMenu} toogleTheme={toggleTheme} />
      ) : (
        <>
          <Header openMenu={openMenu} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </Container>
  );
}

export default Layout;

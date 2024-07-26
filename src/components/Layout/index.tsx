import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import MenuModal from "../MenuModal";

import { Container } from "./styled";

function Layout() {
  // const { menuIsOpen } = useContext(ModalContext);
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
        <MenuModal closeMenu={closeMenu} />
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

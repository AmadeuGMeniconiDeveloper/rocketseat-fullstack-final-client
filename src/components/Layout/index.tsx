import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { ModalContext } from "@/context/ModalContext";

import Header from "../Header";
import Footer from "../Footer";
import MenuModal from "../MenuModal";

import { Container } from "./styled";

function Layout() {
  const { menuIsOpen } = useContext(ModalContext);

  return (
    <Container>
      {menuIsOpen ? (
        <MenuModal />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}
      <Footer />
    </Container>
  );
}

export default Layout;

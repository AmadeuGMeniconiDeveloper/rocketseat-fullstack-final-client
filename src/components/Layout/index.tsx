import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./styled";
import MenuModal from "../MenuModal";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

// #CHECK: Modal render hack - z-index
function Layout() {
  const { menuIsOpen } = useContext(ModalContext);

  return (
    <Container>
      {menuIsOpen && <MenuModal />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

export default Layout;

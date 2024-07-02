import { ReactNode, useState } from "react";

import { ModalContext } from "./ModalContext";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
      {children}
    </ModalContext.Provider>
  );
};

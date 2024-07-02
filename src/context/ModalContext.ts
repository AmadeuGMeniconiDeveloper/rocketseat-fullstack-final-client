import { createContext } from "react";

type ModalContextType = {
  menuIsOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styled";

interface LabelProps {
  children: ReactNode;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
}

function Label({ children, labelProps }: LabelProps) {
  return <Container {...labelProps}>{children}</Container>;
}

export default Label;

import { Container } from "./styled";
import { ReactNode } from "react";

interface InputTextProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

function InputText({
  leftIcon,
  rightIcon,
  ...props
}: InputTextProps & React.ComponentProps<"input">) {
  return (
    <Container>
      {leftIcon && leftIcon}
      <input {...props} autoComplete="off" />
      {rightIcon && rightIcon}
    </Container>
  );
}

export default InputText;

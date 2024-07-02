import { Container } from "./styled";
import { ReactNode } from "react";

interface InputTextProps {
  label?: string;
}

function InputText({
  label,
  ...props
}: InputTextProps & React.ComponentProps<"input">) {
  return (
    <Container>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input id={props.id} {...props} />
    </Container>
  );
}

export default InputText;

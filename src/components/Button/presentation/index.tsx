import { Container } from "./styled";

function Button(props: React.ComponentProps<"button">) {
  return <Container {...props}>{props.children}</Container>;
}

export default Button;

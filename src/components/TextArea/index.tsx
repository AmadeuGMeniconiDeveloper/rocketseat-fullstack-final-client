import { Container } from "./styled";

function TextArea({ ...props }: React.ComponentProps<"textarea">) {
  return <Container {...props}></Container>;
}

export default TextArea;

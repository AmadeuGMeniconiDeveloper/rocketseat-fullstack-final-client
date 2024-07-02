import { Container } from "./styled";

function InputText(props: React.ComponentProps<"input">) {
  return (
    <Container>
      <label htmlFor={props.id}>{props.title}</label>
      <input {...props} />
    </Container>
  );
}

export default InputText;

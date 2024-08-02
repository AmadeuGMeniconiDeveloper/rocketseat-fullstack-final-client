import { Container } from "./styled";

interface ImagePlaceholderProps {
  alt: string;
}

function ImagePlaceholder({ alt }: ImagePlaceholderProps) {
  return (
    <Container>
      <span>{alt.charAt(0).toUpperCase()}</span>
    </Container>
  );
}

export default ImagePlaceholder;

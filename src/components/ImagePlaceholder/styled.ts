import styled from "styled-components";

const Container = styled.div`
  display: grid;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
  background: ${({ theme }) => theme.COLORS.FOREGROUNG.FG_300};
  aspect-ratio: 1/1;

  span {
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
    place-self: center;
  }
`;

export { Container };

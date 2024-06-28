import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  max-width: 316px;
  gap: 12px;

  img {
    height: 43px;
  }

  h1 {
    font-size: 38px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }
`;

export { Container };

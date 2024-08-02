import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;

  & > h1 {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XXXLARGE};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }

  & > button {
    align-self: start;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export { Container, ButtonGroup };

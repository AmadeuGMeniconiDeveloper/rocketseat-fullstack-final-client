import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    min-width: 280px;
    max-width: 316px;
    margin-top: 73px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  a {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.SMALL};
    font-weight: 500;
    text-decoration: none;
    align-self: center;
  }
`;

export { Container };

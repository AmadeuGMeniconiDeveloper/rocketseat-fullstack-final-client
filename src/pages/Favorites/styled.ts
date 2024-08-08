import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-inline: 24px;
  padding-block: 44px 24px;
  gap: 24px;
  max-width: 768px;
  margin-inline: auto;

  & > button {
    align-self: start;
  }

  & > h1 {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XXXLARGE};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }
`;

export { Container };

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 24px;
  padding-block: 44px;
  gap: 24px;
  max-width: 768px;
  margin-inline: auto;

  & h2 {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XLARGE};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }

  & p {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.SMALL};
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }
`;

export { Container };

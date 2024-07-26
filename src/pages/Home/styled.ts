import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 24px;
  padding-block: 44px;
  gap: 24px;

  & h2 {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }

  & p {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }
`;

export { Container };

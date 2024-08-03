import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-inline: 24px;
  padding-block: 44px 12px;
  gap: 24px;

  & > button {
    align-self: start;
  }

  & > h1 {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XXXLARGE};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
  }

  & > span {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  p {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XLARGE};
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    margin-bottom: 2rem;
  }
`;

const CartItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
  height: 100%;
  margin-bottom: 3rem;
`;

export { Container, CartItemList };

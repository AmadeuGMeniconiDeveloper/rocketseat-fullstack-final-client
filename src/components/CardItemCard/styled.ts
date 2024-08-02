import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;
  background: transparent;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    & > a {
      font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XXLARGE};
      font-weight: 500;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    & > button {
      font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TINTS.TOMATO};
    }
  }
`;

const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};

  & > img {
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
  }
`;

const PriceContainer = styled.span`
  font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
  margin-top: 0.5rem;
`;

const QuantityContainer = styled.span`
  font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
`;

export { Container, ImageContainer, PriceContainer, QuantityContainer };

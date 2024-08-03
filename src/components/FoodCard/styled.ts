import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 210px;
  height: 295px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  padding: 2.4rem;

  & > h1 {
    font-size: 1.4rem;
  }

  & > h3 {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE};
  }
`;

const ImageContainer = styled.div`
  width: 86px;
  height: 86px;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};

  & > img {
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
  }
`;

export { Container, ImageContainer };

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 21rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_500};
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  padding: 2.4rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  & > p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    height: 1.5rem;
    line-height: "auto";
  }

  & > h1 {
    font-size: 1.4rem;
  }

  & > h3 {
    font-size: 1.6rem;
    font-weight: 700;
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

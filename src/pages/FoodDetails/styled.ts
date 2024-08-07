import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 44px;

  & > button {
    align-self: start;
  }

  & > p {
    text-align: center;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  width: 100%;
  margin-bottom: 24px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    font-size: 12px;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_400};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 254px;
  height: 254px;

  & > img {
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export {
  Container,
  TagContainer,
  FooterContainer,
  ImageContainer,
  LoadingContainer,
};

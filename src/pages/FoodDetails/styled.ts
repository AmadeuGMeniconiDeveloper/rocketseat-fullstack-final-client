import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 44px;

  & > img {
    aspect-ratio: 1/1;
    width: 254px;
    object-fit: cover;
    object-position: center;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
  }

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

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    font-size: 12px;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_600};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export { Container, TagContainer, FooterContainer };

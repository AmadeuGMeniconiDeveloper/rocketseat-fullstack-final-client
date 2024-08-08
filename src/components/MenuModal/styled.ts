import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_200};

  & > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-inline: 28px;
    padding-top: 32px;
    height: 98px;
    border: none;
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_500};
  }

  & > div {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    padding: 44px 24px 12px 24px;
    border: none;

    button {
      align-self: self-start;
      font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
      font-weight: 700;
    }
  }
`;

const SearchList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10rem;
  right: 0rem;
  left: 0rem;
  margin-inline: 2.3rem;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_500};
  list-style: none;

  li {
    width: 100%;

    &:first-of-type {
      border-top-right-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
      border-top-left-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
    }

    &:last-of-type {
      border-bottom-right-radius: ${({ theme }) =>
        theme.COMMONS.BORDER_RADIUS.M};
      border-bottom-left-radius: ${({ theme }) =>
        theme.COMMONS.BORDER_RADIUS.M};
    }

    &:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
    }

    button {
      display: flex;
      justify-content: start;
      width: 100%;
      padding-inline: 2rem;
      padding-block: 1.5rem;
    }
  }
`;

const NavigationList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;

  a {
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.LARGE};
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};

    &:hover {
      filter: ${({ theme }) => theme.COMMONS.FILTERS.BRIGHTEN};
      cursor: pointer;
      text-decoration: underline;
    }

    &:active {
      filter: ${({ theme }) => theme.COMMONS.FILTERS.DARKEN};
    }

    &:disabled {
      filter: ${({ theme }) => theme.COMMONS.FILTERS.DESATURATE};
      cursor: default;
    }
  }
`;

const MessageBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 10rem;
  right: 0rem;
  left: 0rem;
  margin-inline: 2.3rem;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_500};
  list-style: none;

  padding-inline: 2rem;
  height: 8rem;
  p {
  }
`;

export { Container, SearchList, NavigationList, MessageBox };

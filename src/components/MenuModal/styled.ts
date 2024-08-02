import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_400};

  & > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 56px 28px 24px 28px;
    border: none;
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  }

  & > div {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    padding: 36px 28px 12px 28px;
    border: none;

    button {
      align-self: self-start;
      font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XLARGE};
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
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
  margin-inline: 2.8rem;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
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
      background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_900};
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

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
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
  margin-inline: 2.8rem;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  list-style: none;

  padding-inline: 2rem;
  height: 8rem;
  p {
  }
`;

export { Container, SearchList, ButtonList, MessageBox };

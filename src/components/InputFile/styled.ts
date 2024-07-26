import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 16px;
  height: 4.8rem;
  line-height: 0%;

  &:focus-within {
    outline: ${({ theme }) => theme.COLORS.TINTS.BLUE} solid 1px;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  button {
    height: 100%;
    padding: 0 16px;
  }

  button:first-of-type {
    width: 100%;
    display: flex;
    justify-content: start;
    font-size: 14px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }

  input {
    display: none;
  }
`;

export { Container };

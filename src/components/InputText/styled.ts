import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 16px;
  padding-inline: 16px;
  height: 4.8rem;
  line-height: 0%;

  &:focus-within {
    outline: ${({ theme }) => theme.COLORS.TINTS.BLUE} solid 1px;
  }

  input {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    font-size: 16px;
    width: 100%;
    height: 100%;
    line-height: 0%;

    &:focus-within {
      outline: none;
    }
  }
`;

export { Container };

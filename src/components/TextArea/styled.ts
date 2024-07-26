import styled from "styled-components";

const Container = styled.textarea`
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 16px;
  padding: 16px;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export { Container };

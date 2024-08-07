import styled from "styled-components";

const Container = styled.select`
  display: flex;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_600};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 16px;
  width: 100%;
  padding: 0 14px;
  height: 4.8rem;

  -webkit-appearance: none;
  -moz-appearance: none;
`;

export { Container };

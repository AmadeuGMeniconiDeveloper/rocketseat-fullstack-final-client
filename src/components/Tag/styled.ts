import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 14px;
  gap: 1rem;
  font-weight: 500;
  height: 3rem;
  line-height: 0%;
  border: none;
  padding-inline: 12px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);

  p {
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    text-align: center;
    font-weight: 400;
  }
`;

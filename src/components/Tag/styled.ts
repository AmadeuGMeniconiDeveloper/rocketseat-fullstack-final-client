import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUNG.FG_600};
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 14px;
  font-weight: 500;
  height: 3rem;
  line-height: 0%;
  border: none;
  padding-inline: 12px;

  p {
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    text-align: center;
    font-weight: 400;
    margin-right: 8px;
  }
`;

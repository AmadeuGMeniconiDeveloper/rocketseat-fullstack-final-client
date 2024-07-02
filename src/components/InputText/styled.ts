import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.FOREGROUNG.FG_400};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }
  input {
    border: none;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_800};
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    font-size: 16px;
    line-height: 0%;
    padding: 14px 16px;
    width: 100%;
  }
`;

export { Container };

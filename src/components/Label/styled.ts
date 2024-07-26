import styled from "styled-components";

const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.FOREGROUNG.FG_400};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
`;

export { Container };

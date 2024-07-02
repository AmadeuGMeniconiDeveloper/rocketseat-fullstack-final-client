import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 56px 28px 24px 28px;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
`;

export { Container };

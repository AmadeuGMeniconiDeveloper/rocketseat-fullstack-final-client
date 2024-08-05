import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-inline: 28px;
  padding-top: 50px;
  padding-bottom: 18px;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
`;

export { Container };

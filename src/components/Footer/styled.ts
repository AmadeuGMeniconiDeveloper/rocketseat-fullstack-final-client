import styled from "styled-components";

// #CHECK: Modal render hack - footer z-index
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};

  p {
    text-align: right;
    width: fit-content;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export { Container };

import styled from "styled-components";

const Container = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_400};

  & > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 56px 28px 24px 28px;
    border: none;
    background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 36px 28px 12px 28px;
    border: none;

    button {
      align-self: self-start;
    }
  }
`;

export { Container };

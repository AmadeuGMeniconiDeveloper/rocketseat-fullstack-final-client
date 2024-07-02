import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  padding-bottom: 0;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: linear-gradient(
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_700},
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_500}
  );

  span {
    min-width: 240px;
    max-width: 280px;
    h1 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    }

    p {
      font-size: 1.2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    }
  }
`;

export { Container };

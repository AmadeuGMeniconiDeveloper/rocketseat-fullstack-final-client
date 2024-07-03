import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  padding-block: 24px;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: linear-gradient(
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_700},
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_500}
  );

  img {
    position: absolute;
    left: -12px;
    bottom: 0;
  }

  span {
    margin-top: 12px;
    width: 260px;

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

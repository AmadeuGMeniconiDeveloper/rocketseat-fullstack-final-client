import styled from "styled-components";

const LogoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 3rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }
`;

const LogoAdmin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  width: 100%;
  gap: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 3rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_DEFAULT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE};
  }
`;

const LogoSimple = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.6rem;

  filter: grayscale(1);

  img {
    height: 1.8rem;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  }
`;

export { LogoUser, LogoAdmin, LogoSimple };

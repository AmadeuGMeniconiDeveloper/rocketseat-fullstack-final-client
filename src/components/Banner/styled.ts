import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-block: 24px;
  padding-inline: 24px;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: linear-gradient(
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_700},
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_500}
  );

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 140px;

    gap: 0.4rem;
  }

  & h1 {
    text-align: start;
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
  }

  & p {
    text-align: start;
    font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.XSMALL};
  }

  & > img {
    position: absolute;
    object-fit: cover;
    left: 0;
    bottom: 0;
    width: 160px;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  }
`;

export { Container };

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
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_500},
    ${({ theme }) => theme.COLORS.BACKGROUND.BG_200}
  );
`;

export { Container };

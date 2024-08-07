import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.BG_500};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 16px;
  line-height: 0%;
  width: 100%;
  min-height: 4.8rem;
  height: fit-content;
  padding: 1rem 1rem;
`;

const AddTag = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.BG_700};
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.M};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
  font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
  font-size: 14px;
  font-weight: 500;
  height: 3rem;
  line-height: 0%;
  border: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT} 1px dashed;
  padding-inline: 12px;

  p {
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    text-align: center;
    margin-right: 8px;
  }

  input {
    border: none;
    border-radius: inherit;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_SOFT};
    font-family: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.FAMILLY.ROBOTO};
    font-size: 14px;
    height: 100%;
    width: 7.5rem;
    line-height: 0%;

    &:focus-within {
      outline: none;
    }
  }

  button {
    height: 100%;
  }
`;

export { Container, AddTag };

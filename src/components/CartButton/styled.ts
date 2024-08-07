import styled from "styled-components";

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 4rem;
  /* height: 4rem; */
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: "auto";

  &:hover {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.BRIGHTEN};
    cursor: pointer;
  }

  &:active {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DARKEN};
  }

  &:disabled {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DESATURATE};
    cursor: default;
  }

  p {
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: ${({ theme }) => theme.COLORS.SECONDARY};

  font-size: 1.4rem;
  font-weight: 500;
  line-height: "auto";

  &:hover {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.BRIGHTEN};
    cursor: pointer;
  }

  &:active {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DARKEN};
  }

  &:disabled {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DESATURATE};
    cursor: default;
  }

  p {
    color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  }
`;

const GhostButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.6rem;
  border: none;
  background: transparent;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: "auto";

  div {
    position: absolute;
    top: 0;
    right: 0;
    translate: 10% -10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.FULL};
    background: ${({ theme }) => theme.COLORS.PRIMARY};

    p {
      position: absolute;
      font-size: 1rem;
      margin-top: 1px;
      color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
    }
  }

  &:hover {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.BRIGHTEN};
    cursor: pointer;
  }

  &:active {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DARKEN};
  }

  &:disabled {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.DESATURATE};
    cursor: default;
  }
`;

export { PrimaryButton, SecondaryButton, GhostButton };

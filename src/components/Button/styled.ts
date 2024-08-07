import styled from "styled-components";

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  height: 4rem;
  padding-inline: 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
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
`;

const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  height: 4rem;
  padding-inline: 1rem;

  border: none;
  border-radius: ${({ theme }) => theme.COMMONS.BORDER_RADIUS.S};
  background: ${({ theme }) => theme.COLORS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.TEXT.TEXT_CONTRAST};
  font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
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
`;

const GhostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  /* padding: 0.6rem; */
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.COMMONS.TYPOGRAPHY.FONT.SIZE.MEDIUM};
  font-weight: 500;
  line-height: "auto";

  &:hover {
    filter: ${({ theme }) => theme.COMMONS.FILTERS.BRIGHTEN};
    text-decoration: underline;
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

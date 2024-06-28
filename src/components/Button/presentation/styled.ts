import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 14px;
  font-weight: normal;
  line-height: "auto";
`;

export { Container };

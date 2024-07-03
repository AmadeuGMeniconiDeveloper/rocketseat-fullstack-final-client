import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  & div {
    display: flex;
    justify-content: center;
    width: 12px;
  }
`;

export { Container };

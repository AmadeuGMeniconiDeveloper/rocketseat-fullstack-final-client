import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: grab;
  padding-block: 1rem;

  & ul {
    display: flex;
    width: fit-content;
    gap: 2.4rem;
  }
`;

export { Container };

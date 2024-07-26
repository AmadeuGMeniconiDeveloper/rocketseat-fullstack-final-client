import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  & > button {
    align-self: start;
  }
`;
export { Container };

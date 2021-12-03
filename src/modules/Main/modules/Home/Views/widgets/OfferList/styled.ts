import styled from "styled-components";

const Styled = styled.ul`
  width: 30%;
  list-style: none;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    overflow-y: auto;
  }
`;

export default Styled;

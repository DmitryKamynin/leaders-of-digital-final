import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0%{
    opacity: 0;
  }
  10%{
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Styled = styled.div`
  background: rgb(0, 132, 255);
  color: #fff;
  animation: 3s ${animation} ease-in;
  z-index: 100;
  position: fixed;
  bottom: 10px;
  left: 10px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px 0 rgba(115, 115, 115, 0.3);

  @media screen and (max-width: 800px) {
    text-align: center;
    top: 90px;
    margin: 0 8px;
    bottom: unset;
    left: unset;
  }
`;

export default Styled;

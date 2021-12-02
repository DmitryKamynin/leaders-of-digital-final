import styled from "styled-components";

const Styled = styled.button`
  background: #0d69f2;
  border-radius: 8px;
  padding: 9px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border: none;
  width: 100%;

  :focus {
    outline: none;
  }
  img {
    margin-right: 18px;
  }
`;

Styled.defaultProps = {
  type: "button",
};

export default Styled;

import styled from "styled-components";

const Styled = styled.label<{ state: boolean | "await" }>`
  margin: 4px;
  cursor: pointer !important;
  max-width: 18px;
  width: 100%;
  height: 18px;
  transition: 0.25s;
  border: 2px solid
    ${({ state }): string => (state === true ? "#012883" : "#b0b7c0")};
  border-radius: 2px;
  background: ${({ state }): string =>
    state === true ? "#012883" : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  .check {
    cursor: pointer;
    margin-bottom: 4px;
    width: 12px;
    height: 6px;
    border-top: none;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-right: none;
    transform: rotate(-45deg);
  }

  .await {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: #012883;
  }

  input {
    display: none;
  }
`;

export default Styled;

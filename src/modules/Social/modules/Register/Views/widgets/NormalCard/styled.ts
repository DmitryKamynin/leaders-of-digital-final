import styled from "styled-components";

const Styled = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
  max-width: 200px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.25s;
  :hover {
    border: 1px solid rgb(255, 255, 255);
  }

  .icon {
    max-width: 48px;
    width: 100%;
    margin-bottom: 16px;
  }

  .text {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -1px;
    color: #fff;
  }
`;

export default Styled;

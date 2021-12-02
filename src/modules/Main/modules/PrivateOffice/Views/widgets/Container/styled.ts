import styled from "styled-components";

const Styled = styled.div<{ collapse: boolean }>`
  transition: 0.3s;
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  overflow: hidden;
  :last-child {
    margin-bottom: 18px;
  }
  border-bottom: 2px solid
    ${({ collapse }): string => (collapse ? "#e2e5e9" : "transparent")};

  .collapseTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 0;
    button {
      border: none;
      background: none;
      margin-left: 25px;
      cursor: pointer;
      transition: 0.3s;
      transform: rotate(${({ collapse }): number => (collapse ? 0 : 180)}deg);
    }
  }
`;

export default Styled;

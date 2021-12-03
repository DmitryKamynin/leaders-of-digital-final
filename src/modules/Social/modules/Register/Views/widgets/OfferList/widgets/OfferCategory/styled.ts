import styled from "styled-components";

const Styled = styled.li<{ selected?: boolean }>`
  width: ${({ selected }): string => (selected ? "min-content" : "100%")};
  margin-bottom: 16px;
  cursor: pointer;
  padding: ${({ selected }): string => (selected ? "8px 16px" : "8px 0")};
  border: ${({ selected }): string =>
    selected ? "solid 3px rgb(0, 132, 255)" : "none"};
  color: ${({ selected }): string =>
    selected ? "rgb(0, 132, 255)" : "rgb(182, 193, 221)"};
  border-radius: 8px;
  transition: 0.25s;
  font-size: 18px;
  :hover {
    color: ${({ selected }): string =>
      selected ? "rgb(0, 132, 255)" : "#99a1b4"};
  }
`;

export default Styled;

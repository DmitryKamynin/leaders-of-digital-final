import styled from "styled-components";

const CustomLink = styled.div<{ colored: boolean }>`
  margin-left: auto;
  margin-right: 125px;
  @media screen and (max-width: 800px) {
    margin-right: 12px;
  }
  .link {
    transition: 0.25s;
    padding: 3px 8px;
    display: flex;
    align-items: center;
    font-weight: 400;

    max-width: 160px;
    color: ${({ colored }): string => (colored ? "#fff" : "rgb(0, 132, 255)")};
    border: 2px solid
      ${({ colored }): string => (colored ? "#fff" : "rgb(0, 132, 255)")};
    border-radius: 5px;

    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
    svg {
      max-width: 18px;
      margin-right: 4px;
    }
  }
`;

export default CustomLink;

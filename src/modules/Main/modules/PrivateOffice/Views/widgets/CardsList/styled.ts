import styled from "styled-components";

const Styled = styled.div`
  padding-bottom: 20px;
  color: #2b313b;

  .cardContainer {
    display: flex;
    align-items: flex-start;
    padding-bottom: 20px;

    .title {
      font-size: 16px;
    }

    img {
      margin-right: 10px;
    }
  }

  .cardsList {
    padding: 27px;
    border-left: 1px solid #e2e5e9;
  }
`;

export default Styled;

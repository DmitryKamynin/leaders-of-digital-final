import styled from "styled-components";

const Styled = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 120px;
  border-bottom: 1px solid #c1c2c3;
  z-index: 10;
  background: #f1f2f4;
  @media screen and (max-width: 800px) {
    padding: 20px 8px;
  }
  & .container {
    display: flex;
    @media screen and (max-width: 800px) {
      display: none;
    }
    button {
      cursor: pointer;
      margin: 0 25px;
      font-size: 16px;
      background: none;
      border: none;
      :focus {
        outline: none;
      }
    }

    .activeButton {
      border-radius: 20px;
      background: #fff;
      padding: 6px 16px;
    }
  }

  & .icons {
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      :first-child {
        margin-right: 20px;
      }
      :last-child {
        margin-left: 4px;
      }
    }
  }
`;

export default Styled;

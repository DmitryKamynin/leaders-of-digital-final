import styled from "styled-components";

const Styled = styled.div`
  padding: 93px 120px;
  color: #012883;
  font-size: 24px;
  line-height: 28px;
  @media screen and (max-width: 800px) {
    padding: 40px 8px;
    font-size: 18px;
    line-height: 23px;
  }
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    margin-bottom: 81px;

    @media screen and (max-width: 800px) {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 20px;
    }
  }

  .document {
    &.margin {
      margin-bottom: 50px;
    }

    span {
      cursor: pointer;
      font-size: 14px;
      color: #c4c4c4;
      @media screen and (max-width: 800px) {
        font-size: 12px;
      }
    }
    .checkbox {
      margin: 10px 0;
      display: flex;
      align-items: center;
      label {
        margin-right: 10px;
      }
    }

    input {
      padding: 16px 37px;
      margin-left: 30px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid #939499;
      width: 158px;
      @media screen and (max-width: 800px) {
        width: 126px;
        padding: 16px 21px;
      }
      :focus {
        outline: none;
      }
    }
  }

  button {
    padding: 14px 43px;
  }
`;

export default Styled;

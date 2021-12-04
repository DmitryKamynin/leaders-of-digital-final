import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  background: #f1f2f4;

  .wrapper {
    padding: 86px 120px 0 120px;

    @media screen and (max-width: 800px) {
      padding: 46px 8px 0 8px;
    }

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      color: #012883;

      @media screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .message {
      margin-top: 126px;
      margin-bottom: 200px;
      font-size: 24px;
      line-height: 28px;
      color: #012883;
      @media screen and (max-width: 800px) {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 23px;
      }
    }

    button {
      padding: 14px 26px;
      @media screen and (max-width: 800px) {
        margin-top: 10px;
      }
      &.margin {
        margin-right: 44px;
        @media screen and (max-width: 800px) {
          margin-right: 10px;
          margin-top: 10px;
        }
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  background: #f1f2f4;
  @media screen and (max-width: 800px) {
    overflow: hidden;
  }
  .wrapper {
    padding-top: 86px;

    @media screen and (max-width: 800px) {
      padding-top: 40px;
    }
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      color: #012883;
      padding: 0 120px;
      @media screen and (max-width: 800px) {
        padding: 0 8px;
        font-size: 20px;
        line-height: 25px;
      }
    }

    .message {
      margin-top: 126px;
      margin-bottom: 60px;
      font-size: 24px;
      line-height: 28px;
      color: #012883;
      padding: 0 120px;
      @media screen and (max-width: 800px) {
        padding: 0 8px;
        margin-top: 20px;
        margin-bottom: 20px;

        font-size: 18px;
        line-height: 23px;
      }
    }

    .accountsContainer {
      margin-bottom: 120px;
      padding: 25px 120px;
      display: flex;
      align-items: flex-end;
      border-top: 1px solid #b0b7c0;
      border-bottom: 1px solid #b0b7c0;
      @media screen and (max-width: 800px) {
        margin-bottom: 20px;
        padding: 25px 8px;
      }

      .account {
        font-size: 24px;
        line-height: 28px;
        color: #012883;
        margin-right: 350px;
        @media screen and (max-width: 800px) {
          font-size: 18px;
          line-height: 23px;
          margin-right: 50px;
        }
      }
    }
    .btnWrapper {
      padding: 0 120px;
      @media screen and (max-width: 800px) {
        padding: 0 8px;
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
  }
`;

export default Styled;

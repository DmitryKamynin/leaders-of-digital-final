import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  background: #f1f2f4;
  .wrapper {
    padding-top: 86px;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      color: #012883;
      padding: 0 120px;
    }

    .message {
      margin-top: 126px;
      margin-bottom: 60px;
      font-size: 24px;
      line-height: 28px;
      color: #012883;
      padding: 0 120px;
    }

    .accountsContainer {
      margin-bottom: 120px;
      padding: 25px 120px;
      display: flex;
      align-items: flex-end;
      border-top: 1px solid #b0b7c0;
      border-bottom: 1px solid #b0b7c0;

      .account {
        font-size: 24px;
        line-height: 28px;
        color: #012883;
        margin-right: 350px;
      }
    }
    .btnWrapper {
      padding: 0 120px;

      button {
        padding: 14px 26px;

        &.margin {
          margin-right: 44px;
        }
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  background: #f1f2f4;

  .wrapper {
    padding: 86px 120px 0 120px;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      color: #012883;
    }

    .message {
      margin-top: 126px;
      margin-bottom: 200px;
      font-size: 24px;
      line-height: 28px;
      color: #012883;
    }

    button {
      padding: 14px 26px;

      &.margin {
        margin-right: 44px;
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";
import thanksBackground from "@/assets/thanksBackground.png";

const Styled = styled.div`
  height: 100%;
  background: url(${thanksBackground});

  .wrapper {
    padding: 86px 120px 0 120px;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      max-width: 540px;
      width: 100%;
      color: #e3e6ed;
    }

    .message {
      margin-top: 126px;
      margin-bottom: 200px;
      font-size: 36px;
      text-transform: uppercase;
      line-height: 28px;
      color: #e3e6ed;
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

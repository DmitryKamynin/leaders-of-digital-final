import styled from "styled-components";
import thanksBackground from "@/assets/thanksBackground.png";

const Styled = styled.div`
  height: 100%;
  background: url(${thanksBackground});
  background-size: cover;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 100%;
    background-position: 50%;
  }

  .wrapper {
    padding: 86px 120px 0 120px;
    @media screen and (max-width: 800px) {
      padding: 30px 8px 0 8px;
    }
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      max-width: 540px;
      width: 100%;
      color: #e3e6ed;
      @media screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .message {
      margin-top: 126px;
      margin-bottom: 200px;
      font-size: 36px;
      text-transform: uppercase;
      line-height: 28px;
      color: #e3e6ed;
      @media screen and (max-width: 800px) {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 25px;
      }
    }

    button {
      padding: 14px 26px;
      @media screen and (max-width: 800px) {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
  }
`;

export default Styled;

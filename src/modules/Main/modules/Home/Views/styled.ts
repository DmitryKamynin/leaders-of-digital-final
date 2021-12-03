import styled from "styled-components";
import Banner from "./Assets/banner.jpg";

export const StyledStartContainer = styled.div`
  background: url(${Banner}) no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  .slider {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 800px) {
    background-position: center;
  }
`;

const Styled = styled.div`
  background-color: rgb(243, 247, 250);
  padding-top: 120px;
  .container {
    margin: 120px 44px 120px 190px;

    @media screen and (max-width: 800px) {
      margin: 44px 8px;
    }
    :first-child {
      margin-top: 0;
    }
    .title {
      margin-bottom: 48px;
      color: rgb(182, 193, 221);
      font-size: 50px;
      font-weight: 400;
    }

    .content {
      display: flex;
      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      .bannerContainer {
        display: flex;
        flex-wrap: wrap;
        margin-left: 70px;

        @media screen and (max-width: 800px) {
          margin-left: 8px;
        }
      }
    }
  }
`;

export default Styled;

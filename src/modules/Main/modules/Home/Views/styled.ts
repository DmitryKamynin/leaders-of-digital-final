import styled from "styled-components";

export const StyledStartContainer = styled.div`
  background: url(https://www.vtb.ru/-/media/headlesscms/main/hero_new/vtb_online/bg/1440.jpg)
    no-repeat;
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

      .bannerContainer {
        display: flex;
        flex-wrap: wrap;
        margin-left: 70px;
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  padding: 30px 0;
  .promoTitle {
    font-size: 27px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .promoContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 800px) {
      overflow-y: auto;
      padding-bottom: 20px;
    }
    .previewContainer {
      flex: 1 1 auto;

      @media screen and (max-width: 800px) {
        flex-shrink: 0;
      }
      .preview {
        &.color1 {
          background-color: beige;
        }
        &.color2 {
          background-color: blanchedalmond;
        }
        &.color3 {
          background-color: aliceblue;
        }
        max-width: 250px;
        height: 162px;
        width: 100%;
        border-radius: 20px;
        @media screen and (max-width: 800px) {
          min-width: 250px;
          margin-right: 15px;
        }
      }

      .previewTitle {
        padding-top: 20px;
        font-size: 16px;
        font-weight: 600;
      }

      .previewSubTitle {
        font-size: 14px;
      }
    }
  }
`;

export default Styled;

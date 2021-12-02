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
    .previewContainer {
      flex: 1 1 auto;
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

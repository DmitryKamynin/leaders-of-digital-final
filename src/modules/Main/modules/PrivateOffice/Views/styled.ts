import styled from "styled-components";

const Styled = styled.div`
  background: #f1f2f4;

  @media screen and (max-width: 800px) {
    overflow: auto;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 20px 120px;

    @media screen and (max-width: 800px) {
      margin: 20px 8px;
      flex-direction: column;
    }

    .leftContainer {
      flex: 0.28 1 0;
    }

    .container {
      background-color: #fff;
      border-radius: 20px;
      padding: 25px 15px;
      margin-bottom: 20px;

      &.cardsList {
        max-height: 70vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background: #cccccc;
        }
      }

      &.rightContainer {
        flex: 0.7 1 0;
      }

      &.banner {
        width: 100%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.11);
        padding: 20px 50px;

        .bannerInfo {
          display: flex;
          justify-content: space-between;
        }

        .icon {
          @media screen and (max-width: 800px) {
            display: none;
          }
        }

        .text {
          max-width: 400px;
          font-size: 18px;
          margin-bottom: 70px;
          @media screen and (max-width: 800px) {
            margin-bottom: 30px;
          }
        }

        .link {
          display: block;
          cursor: pointer;
          background: none;
          border: none;
          color: #003ae5;
          font-size: 18px;
        }
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  overflow: hidden;
  background: #f1f2f4;

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 20px 180px;

    .leftContainer {
      flex: 0.1 1 auto;
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
        flex: 0.88 1 auto;
      }

      &.banner {
        width: 100%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.11);
        padding: 20px 50px;

        .link {
          color: #003ae5;
          font-size: 18px;
        }
      }
    }
  }
`;

export default Styled;

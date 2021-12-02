import styled from "styled-components";

const Styled = styled.div<{ hovered: boolean }>`
  max-width: 299px;
  padding: 24px;
  transition: 0.25s;
  background: ${({ hovered }): string => (hovered ? "#fff" : "transparent")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ hovered }): string =>
    hovered
      ? "0 1px 20px rgb(39 74 146 / 5%), 0 16px 40px rgb(39 74 146 / 5%)"
      : "unset"};
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    box-shadow: none;
    background: #fff;
    max-width: unset;
    width: 100%;
    margin-bottom: 10px;
  }

  .container {
    margin: 0;
    flex-grow: 1;

    @media screen and (max-width: 800px) {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .img {
      max-width: 223px;
      @media screen and (max-width: 800px) {
        max-width: 60px;
        margin-right: 8px;
      }
      img {
        width: 100%;
      }
    }

    .break {
      width: 90%;
      height: 2px;
      margin-bottom: 10px;
      border-radius: 50%;
      transition: 0.25s;
      background: linear-gradient(90deg, #0037ff 0%, #0085ff 75%);
      opacity: ${({ hovered }): number => (hovered ? 0.3 : 1)};

      @media screen and (max-width: 800px) {
        display: none;
      }
    }

    .title {
      color: rgb(10, 40, 150) !important;
      font-size: 32px !important;

      @media screen and (max-width: 800px) {
        font-size: 22px !important;
        margin-bottom: 10px;
      }

      span {
        color: rgb(0, 86, 255) !important;
      }
    }
  }

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 0;
    width: 100%;
    transition: 0.25s;
    opacity: ${({ hovered }): number => (hovered ? 1 : 0)};

    @media screen and (max-width: 800px) {
      flex-direction: row;
      opacity: 1;
    }

    button {
      padding: 17px 0;
      width: 100%;
      margin-bottom: 10px;

      @media screen and (max-width: 800px) {
        margin-bottom: 0;
      }
      :last-child {
        margin-bottom: 0;

        @media screen and (max-width: 800px) {
          margin-left: 4px;
        }
      }
    }
  }
`;

export default Styled;

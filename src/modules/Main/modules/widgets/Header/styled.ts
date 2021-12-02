import styled from "styled-components";

const Styled = styled.header<{ transparent: boolean }>`
  display: flex;
  padding-left: 10px;
  position: fixed;
  z-index: 10;
  top: 0;
  transition: 0.25s;
  background: ${({ transparent }): string =>
    transparent ? "transparent" : "#fff"};
  color: ${({ transparent }): string =>
    transparent ? "#fff" : "rgb(47, 52, 65)"};

  width: 100%;
  .logo {
    margin-right: 10px;
    margin-top: 24px;
    @media screen and (max-width: 800px) {
      margin-top: 10px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .flex {
      display: flex;
      align-items: center;
      padding-top: 13px;

      :last-child {
        flex-wrap: wrap;
        padding: 16px 0 6px 0;
      }

      .uslugi {
        margin-right: 14px;
        margin-bottom: 10px;
        cursor: pointer;

        @media screen and (max-width: 800px) {
          display: none;
        }
      }

      .uslugiMobile {
        margin-right: 6px;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;
        display: none;
        @media screen and (max-width: 800px) {
          display: block;
        }
      }

      .clients {
        margin-right: 10px;
        padding: 10px 0;
        color: ${({ transparent }): string =>
          transparent ? "#fff" : "rgb(0, 132, 255)"};
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        opacity: 0.6;
        @media screen and (max-width: 800px) {
          display: none;
        }

        :first-child {
          opacity: unset;
          border-bottom: 2px solid
            ${({ transparent }): string =>
              transparent ? "#fff" : "rgb(0, 132, 255)"};
        }
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div<{ hasMessage: boolean }>`
  position: sticky;
  bottom: 0;
  padding-bottom: 20px;
  .container {
    width: 90%;
    display: flex;
    justify-content: space-around;
    padding: 22px;
    background: #3a4a61;
    border-radius: 18px;
    margin: 0 auto;
    .icon {
      cursor: pointer;
      font-size: 10px;

      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: none;
      background: none;
      color: #e3e6ed;

      .notification {
        width: 16.33px;
        height: 16.33px;
        transition: 0.3s;
        opacity: ${({ hasMessage }) => (hasMessage ? 1 : 0)};

        background: #e7463d;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        position: absolute;
        top: 0;
        right: 0;
      }

      img {
        margin-bottom: 3px;
        :last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div<{ chatOpen: boolean }>`
  transition: 0.3s;
  position: absolute;
  top: 0;
  right: ${({ chatOpen }): string => (chatOpen ? "0%" : "-100%")};
  width: 100%;
  height: 100%;
  background: #191a1c;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .chatControl {
    margin: 60px 0 50px 33px;
    display: flex;
    align-items: center;

    .name {
      font-weight: bold;
      font-size: 18px;
    }

    .icon {
      cursor: pointer;
      margin-right: 20px;

      border: none;
      background: none;

      :last-child {
        margin-right: 17px;
        margin-left: auto;
      }
    }
  }

  .chatContainer {
    overflow-y: auto;
    margin-bottom: 10px;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #4182e4;
    }

    .name {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #939499;
      margin-left: 33px;
    }

    .messagesContainer {
      margin-top: 5px;
      margin-right: 20px;
      overflow-y: auto;

      .vtbMessage {
        display: flex;
        align-items: flex-end;
        margin-top: 5px;

        .icon {
          margin-right: 11px;
        }

        .message {
          padding: 19px;
          background: #282c35;
          border-radius: 10px;
          font-size: 14px;
          line-height: 16px;
          color: #939499;
          flex-grow: 1;
          width: 100%;

          a {
            color: #4182e4;
          }
        }
      }

      .myMessage {
        margin-top: 5px;
        margin-left: 33px;

        .message {
          background: transparent;
          border: 1px solid #d5d5d5;
          border-radius: 10px;

          padding: 19px;
          font-size: 14px;
          line-height: 16px;
          color: #939499;
          flex-grow: 1;
          width: 100%;
        }
      }
    }
  }

  .controller {
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;

    position: relative;

    .variantsContainer {
      display: flex;
      width: 200%;

      .variant {
        cursor: pointer;
        border: none;
        display: block;

        background: #1d2228;
        border-radius: 25px;
        color: #939499;
        padding: 13px 20px;
        margin-right: 15px;

        :last-child {
        }
      }
    }

    .icon {
      position: absolute;
      bottom: 64px;
      right: 20px;
      cursor: pointer;
    }

    input {
      margin-top: 20px;
      background: #1d2228;
      border: 1px solid #4c4d4f;
      border-radius: 25px;
      padding: 10px 16px;
      color: #939499;

      :focus {
        outline: none;
      }
    }
  }
`;

export default Styled;

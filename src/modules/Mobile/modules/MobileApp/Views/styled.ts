import styled from "styled-components";

const Styled = styled.div<{ chatOpen: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f3f7fa;

  .mobileTemplate {
    max-width: 360px;
    width: 100%;
    height: 100%;

    display: ${({ chatOpen }): string => (chatOpen ? "flex" : "block")};
    flex-direction: column;

    padding: 0 10px;
    background: #191a1c;
    color: #e3e6ed;

    overflow-x: hidden;
    overflow-y: auto;

    position: relative;

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
    .bannerContainer {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      max-width: 302px;
      min-height: 125px;
      img {
        width: 100%;
      }
    }

    .item {
    }
  }
`;

export default Styled;

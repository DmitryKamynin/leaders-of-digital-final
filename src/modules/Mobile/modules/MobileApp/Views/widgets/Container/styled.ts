import styled from "styled-components";

const Styled = styled.div<{ collapse: boolean }>`
  transition: 0.3s;
  width: 100%;
  padding: 16px;
  background: #282c35;
  border-radius: 10px;
  margin-bottom: 8px;
  overflow: hidden;
  :last-child {
    margin-bottom: 18px;
  }
  .closeTitle,
  .collapseTitle {
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
    font-size: 18px;
  }
  .closeTitle {
    img {
      cursor: pointer;
    }
  }

  .subTitle {
    font-size: 13px;
    margin-bottom: 32px;
  }

  .collapseTitle {
    justify-content: flex-start;
    margin-bottom: 32px;
    .icon {
      border: none;
      background: none;
      margin-left: 25px;
      cursor: pointer;
      transition: 0.3s;
      transform: rotate(${({ collapse }): number => (collapse ? 0 : 180)}deg);

      :last-child {
        margin-left: auto;
        transform: unset;
      }
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #191a1c;
  display: flex;
  justify-content: space-between;
  padding: 17px 17px 22px 17px;
  width: 100%;
  .time {
  }

  .icons {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      :last-child {
        margin-right: 0;
      }
    }
  }
`;

export default Styled;

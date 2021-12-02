import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
  width: 100%;

  .icon {
    max-width: 22px;
    min-width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    cursor: pointer;
  }

  .search {
    color: #99a0aa;
    background: #282c35;
    flex-grow: 1;
    padding: 8px 12px;
    border-radius: 20px;
    margin-right: 13px;

    input {
      color: #99a0aa;
      background: #282c35;
      border: none;

      :focus {
        outline: none;
      }
    }
    img {
      margin-right: 13px;
    }
  }
`;

export default Styled;

import styled from "styled-components";

const Styled = styled.div`
  flex-shrink: 0;
  max-width: 625px;
  margin-left: 190px;
  margin-right: 8px;
  width: 100%;
  padding: 32px;
  background: #fff;
  border-radius: 8px;

  @media screen and (max-width: 800px) {
    margin-left: 8px;
    padding: 16px;
    max-width: 260px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 28px;
    color: rgb(0, 86, 255);
    @media screen and (max-width: 800px) {
      font-size: 18px;
    }

    span {
      color: rgb(10, 40, 150);
    }
  }
  button {
    margin-right: 8px;
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-right: 0;
    }
  }
  .firstButton {
    @media screen and (max-width: 800px) {
      margin-bottom: 10px;
    }
  }
`;

export default Styled;

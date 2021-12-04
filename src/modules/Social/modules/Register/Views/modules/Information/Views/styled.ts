import styled from "styled-components";

const Styled = styled.div`
  padding: 93px 120px;

  @media screen and (max-width: 800px) {
    padding: 40px 8px;
  }

  .title {
    color: #012883;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    max-width: 740px;
    margin-bottom: 81px;

    @media screen and (max-width: 800px) {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 20px;
    }
  }

  ul {
    color: #012883;
    font-size: 24px;
    line-height: 28px;
    list-style: none;
    max-width: 1258px;
    margin-bottom: 60px;

    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 20px;
    }
  }

  button {
    padding: 14px 43px;
  }
`;

export default Styled;

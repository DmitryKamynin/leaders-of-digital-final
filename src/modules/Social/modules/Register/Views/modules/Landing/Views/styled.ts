import styled from "styled-components";
import background from "@/assets/thanksBackground.png";
import secondBackground from "./Assets/secondBlock.png";
import thirdBackground from "./Assets/thirdBlock.png";

export const FifthBlock = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #012883 0%, #0192db 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding-left: 200px;

  @media screen and (max-width: 800px) {
    height: 70%;
    padding-left: 8px;
  }

  .title {
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 42px;

    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  .subTitle {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 12px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 30px;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 25px;
    li {
      font-size: 24px;
      line-height: 28px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
        max-width: 90%;
        line-height: 20px;
        margin-bottom: 20px;
      }
      span {
        @media screen and (max-width: 800px) {
          font-size: 18px;
          line-height: 20px;
        }
        font-size: 64px;
        line-height: 75px;
      }
    }
  }

  button {
    margin-top: 25px;
    padding: 14px 46px;
  }
`;

export const FourthBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 70%;
  }

  .title {
    max-width: 1121px;
    color: #012883;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 42px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
    span {
      font-weight: 700;
    }
  }

  .subTitle {
    color: #012883;
    font-size: 24px;
    line-height: 28px;
    max-width: 1121px;
    width: 100%;
    text-align: center;
    padding: 20px;
    border: 1px solid #000;
    margin-bottom: 20px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      border-right: none;
      border-left: none;
      line-height: 20px;
      padding: 10px;
    }
  }
`;

export const ThirdBlock = styled.div`
  padding: 0 72px;
  background: url(${thirdBackground}) no-repeat;
  background-size: cover;
  color: #fff;
  height: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    padding: 0 8px;
    background-position: 50%;
    height: 50%;
  }

  .title {
    margin: 0;
    display: flex;
    align-items: center;
    height: 65%;
    max-width: 634px;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 700;

    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 25px;
      max-width: 306px;
      width: 100%;
    }
  }

  .subTitle {
    max-width: 584px;
    color: #012883;
    font-size: 24px;
    line-height: 28px;
    @media screen and (max-width: 800px) {
      font-size: 13px;
      font-weight: 600;
      line-height: 15px;
      max-width: 170px;
      width: 100%;
    }
  }
`;

export const SecondBlock = styled.div`
  padding: 0 72px;
  background: url(${secondBackground}) no-repeat;
  background-size: cover;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    padding: 0 16px 0 40%;
    background-position: 50%;
    height: 50%;
  }

  .title {
    max-width: 634px;
    color: #012883;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 25px;
      text-align: right;
    }
  }

  .subTitle {
    max-width: 584px;
    color: #012883;
    font-size: 24px;
    line-height: 28px;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 25px;
      text-align: right;
    }
  }
`;

const Styled = styled.div`
  padding: 186px 83px;
  background: url(${background}) no-repeat;
  background-size: cover;
  color: #fff;
  height: 100%;
  position: relative;

  @media screen and (max-width: 800px) {
    padding: 80px 8px;
    background-position: 30%;
    height: 50%;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #e3e6ed;
    max-width: 880px;
    margin-bottom: 28px;

    :last-child {
      margin-bottom: 18px;

      @media screen and (max-width: 800px) {
        margin-bottom: 10px;
      }
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 18px;
      font-size: 16px;
      line-height: 20px;
      max-width: 200px;
    }
  }

  .name {
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    color: #99a0aa;
    max-width: 228px;
    margin-bottom: 15vh;

    @media screen and (max-width: 800px) {
      font-size: 14px;
      line-height: 20px;
      max-width: 140px;
      margin-bottom: 0;
    }
  }
  button {
    padding: 14px 46px;
    @media screen and (max-width: 800px) {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
`;

export default Styled;

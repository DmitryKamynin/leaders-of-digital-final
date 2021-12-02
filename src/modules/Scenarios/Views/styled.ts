import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f7fa;

  .container {
    border-radius: 20px;
    padding: 25px;
    background: #fff;
    box-shadow: 0 0 30px 0 rgba(34, 34, 34, 0.1);
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 24px;
      color: #222222;
      margin-bottom: 24px;
      text-align: center;
    }

    .scenariosContainer {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      height: 100%;

      .scenarioCard {
        max-width: 300px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient(90deg, #0037ff 0%, #0085ff 75%);
        color: #fff;
        padding: 0 20px;
        cursor: pointer;
        height: 80px;
        border-radius: 8px;
        transition: 0.3s;
      }
    }
  }
`;

export default Styled;

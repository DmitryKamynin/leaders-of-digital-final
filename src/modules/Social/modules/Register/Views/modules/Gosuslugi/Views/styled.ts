import styled from "styled-components";

const Styled = styled.div`
  padding: 93px 120px;

  .title {
    color: #012883;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    margin-bottom: 81px;
  }

  .inputs {
    margin: 50px 0;
    .inputWrapper {
      margin-bottom: 20px;
      input {
        padding: 16px 37px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid #939499;
        :focus {
          outline: none;
        }
      }
    }
  }

  button {
    padding: 14px 43px;
  }
`;

export default Styled;

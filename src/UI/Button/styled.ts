import styled from "styled-components";

const StyledButton = styled.button<{ variant?: "blue" }>`
  cursor: pointer;
  font-size: 18px;
  border: none;
  padding: 27px 40px;
  border-radius: 8px;
  color: ${({ variant }): string => (variant ? "#fff" : "#000")};
  background: ${({ variant, disabled }): string =>
    disabled
      ? "#868686"
      : variant
      ? "linear-gradient(90deg, #0037ff 0%, #0085ff 75%)"
      : "revert"};
  transition: 0.25s;

  :hover {
    color: #ffffff;
    background: ${({ disabled }): string =>
      disabled ? "#868686" : "linear-gradient(90deg, #0033d9 0%, #006cd2 75%)"};
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 21px 40px;
  }

  :focus {
    outline: none;
  }
`;

StyledButton.defaultProps = {
  type: "button",
};

export default StyledButton;

import styled from "styled-components";

const Styled = styled.div<{ small?: boolean }>`
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  position: relative;
  height: 305px;
  display: flex;
  flex-direction: column;
  width: ${({ small }): string => (small ? "calc(50% - 16px)" : "100%")};
  margin-bottom: 16px;
  margin-right: ${({ small }): string => (small ? "16px" : "0")};

  :last-child {
    margin-right: 0;
    width: ${({ small }): string => (small ? "50%" : "100%")};
  }
  & .text {
    flex-grow: 1;
    & .bannerTitle {
      font-size: 32px;
      color: rgb(47, 52, 65);
      margin-bottom: 16px;
    }

    & .subtitle {
      font-size: 18px;
      max-width: 570px;
    }
  }

  button {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .icon {
    max-width: ${({ small }): string => (small ? "160px" : "275px")};
    bottom: ${({ small }): string => (small ? "0" : "unset")};
    right: 0;
    position: absolute;
    img {
      width: 100%;
    }
  }
`;

export default Styled;

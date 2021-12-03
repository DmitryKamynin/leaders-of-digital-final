import styled from "styled-components";

const Styled = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Arrow = ({ colored }: { colored: boolean }): JSX.Element => (
  <Styled>
    <svg
      className="chevron-icon icon size-small color-dark-gray"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="24"
      height="24"
      data-v-0b115fda=""
      data-v-1d9bc0fc=""
    >
      <path
        fill={colored ? "white" : "black"}
        d="M14.9949 12.415L10.4049 17.005C10.0149 17.395 9.38485 17.395 8.99485 17.005C8.60485 16.615 8.60485 15.985 8.99485 15.595L12.8749 11.705L8.99485 7.82499C8.60485 7.43499 8.60485 6.80499 8.99485 6.41498C9.38485 6.02498 10.0149 6.02498 10.4049 6.41498L14.9949 11.005C15.3849 11.385 15.3849 12.025 14.9949 12.415Z"
      />
    </svg>
  </Styled>
);
export default Arrow;

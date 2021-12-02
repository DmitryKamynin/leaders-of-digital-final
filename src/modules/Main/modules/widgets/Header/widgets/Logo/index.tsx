import styled from "styled-components";

const Stlyed = styled.div`
  svg {
    @media screen and (max-width: 800px) {
      width: 60px;
    }
  }
`;

const Logo = ({ colored }: { colored: boolean }): JSX.Element => (
  <Stlyed>
    <svg
      className="header-logo icon"
      focusable="false"
      viewBox="0 0 98 35"
      role="img"
      width="98"
      height="35"
      data-v-a6fab690=""
      data-v-45671225=""
    >
      <path
        fill={colored ? "white" : "rgb(0, 170, 255)"}
        d="M6.665-0.002l-1.669 4.579h23.127l1.669-4.579h-23.127zM4.162 6.865l-1.669 4.578h23.127l1.669-4.578h-23.127zM1.663 13.732l-1.669 4.578h23.127l1.668-4.578h-23.126z"
      />
      <path
        fill={colored ? "white" : "rgb(30, 75, 210)"}
        d="M49.16 20.055v0.097c1.057 0.388 2.067 1.068 2.596 1.504 1.634 1.359 2.356 3.154 2.356 5.483 0 3.835-2.019 6.6-5.336 7.474-1.010 0.291-2.067 0.388-4.038 0.388h-10.045v-28.048h8.893c1.827 0 3.076 0.097 4.181 0.387 3.221 0.874 5.336 3.106 5.336 6.648 0 1.893-0.673 3.495-1.778 4.562-0.481 0.485-1.154 1.068-2.163 1.504zM40.268 23.015v7.376h3.846c1.153 0 2.211-0.097 2.98-0.825s1.105-1.65 1.105-2.863c0-0.921-0.241-1.795-0.721-2.426-0.817-1.019-1.827-1.262-3.557-1.262h-3.654zM40.219 18.162h3.125c0.961 0 1.442 0 1.922-0.145 1.299-0.389 2.116-1.552 2.116-3.154 0-1.892-0.865-2.718-2.116-3.105-0.529-0.146-1.057-0.194-2.115-0.194h-2.932v6.599zM62.475 35.002v-23.342h-8.027v-4.706h22.305l-1.586 4.706h-7.115v23.342h-5.576zM78.483 35.002v-28.048h18.075l-1.586 4.706h-10.96v6.212h4.471c3.605 0 5.48 0.874 6.778 1.989 1.010 0.874 2.74 2.814 2.74 6.649 0 3.785-1.778 5.871-3.269 6.939-1.73 1.212-3.557 1.553-7.259 1.553h-8.989zM84.011 30.294h4.182c1.586 0 2.547-0.388 3.22-1.262 0.336-0.436 0.817-1.214 0.817-2.669s-0.481-2.475-1.442-3.203c-0.576-0.436-1.346-0.678-2.644-0.678h-4.134v7.812z"
      />
    </svg>
  </Stlyed>
);
export default Logo;

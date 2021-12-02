import { createGlobalStyle } from "styled-components";

const StyledProvider = createGlobalStyle`
    html {
      height: 100%;
      overscroll-behavior: contain;
    }
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overscroll-behavior-y: none;
      * {
        font-family: "VTBGroupUI",sans-serif;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
    #app{
      height: 100%;
    }
`;

export default StyledProvider;

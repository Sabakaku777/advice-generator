import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: "manrope"
   }

   body {
    background-color: hsl(218,23%,16%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:  center;
    font-family: "manrope"
   }
  
  `;

export { GlobalStyles };

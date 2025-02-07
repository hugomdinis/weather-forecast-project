import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font family: 'Poppins', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #B3E5FC, #1565C0);
    color: #ffffff;
    min-height: 100vh;
  }
  
  input, button {
    outline: none;
    border: none;
  }
`;

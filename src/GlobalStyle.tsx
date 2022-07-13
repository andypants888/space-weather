import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 :root {
     --iconHeight: 50px;
     --bgColor1: #43413C;
     --main: #FF3C00;
     font-family: 'Rubik', sans-serif, Helvetica, sans-serif;
 }

 * {
     box-sizing:border-box;
 }

 body {
     margin: 0;
     padding: 0;
     background-color: black;
     color: white;
 }
`;

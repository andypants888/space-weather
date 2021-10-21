import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --iconHeight: 50px;
     --maxWidth: 100%;
     --bgColor1: #43413C;
     --main: #FF3C00;
     --fontSuperBig: 2.5rem;
     --fontBig: 1.7rem;
     --fontMed: 1.2rem;
     --fontSmall: 1rem;
     font-family: Tahoma, Helvetica, sans-serif;
 }

 * {
     box-sizing:border-box;
     /* font-family:  */
 }

 body {
     margin: 0;
     padding: 0;
     background-color: var(--bgColor1);
     color: white;
     h1 {
     }
    /* h1, h3, p global styles */
 }
`;

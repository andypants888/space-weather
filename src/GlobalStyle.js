import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --maxWidth: 1280px;
     --white: #ffffff;
     --grey: #43413C;
     --red: #FF3C00;
     --fontSuperBig: 2.5rem;
     --fontBig: 1.7rem;
     --fontMed: 1.2rem;
     --fontSmall: 1rem;
 }

 * {
     box-sizing:border-box;
     /* font-family:  */
 }

 body {
     margin: 0;
     padding: 0;
     background-color: var(--grey);

     h1 {
     }
    /* h1, h3, p global styles */
 }
`;

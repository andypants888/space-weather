import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`

 :root {
     font-family: 'Rubik', sans-serif, Helvetica, sans-serif;
     
     @media ${device.desktop} {
       --iconHeight: 80px;
     }

     @media ${device.laptop} {
       --iconHeight: 50px;
     }

     @media ${device.tablet} {
       --iconHeight: 50px;
     }

     @media ${device.mobile} {
       --iconHeight: 40px;
     }
 }

 * {
     box-sizing:border-box;
 }

 body {
     margin: 0;
     padding: 0;
     color: white;
     /* width: 100%;
     height: 100%; */

     @media ${device.desktop} {
      background-image: linear-gradient(
        120deg,
        #181615,
        #070606
      );
    }

    @media ${device.laptop} {
      background-image: linear-gradient(
        120deg,
        #181615,
        #070606
      );
    }

    @media ${device.tablet} {
      background-image: linear-gradient(
        120deg,
        #181615,
        #070606
      );
    }

    @media ${device.mobile} {
      background-image: linear-gradient(
        120deg,
        #181615,
        #070606
      );
    }
 }
`;

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
     width: 100%;
     height: 100%;

     @media ${device.desktop} {
      background-image: linear-gradient(
        -40deg,
        #3e3836,
        #070606,
        #302c2b,
        #070606
      );
    }

    @media ${device.laptop} {
      background-image: linear-gradient(
        -40deg,
        #3e3836,
        #070606,
        #35302f,
        #070606
      );
    }

    @media ${device.tablet} {
      background-image: linear-gradient(
        35deg,
        #252220,
        #070606,
        #4e4542,
        #070606
      );
    }

    @media ${device.mobile} {
      background-image: linear-gradient(
        70deg,
        #333130,
        #070606,
        #6d605b,
        #070606
      );
    }
 }
`;

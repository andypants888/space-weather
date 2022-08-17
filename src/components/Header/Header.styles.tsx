import styled from "styled-components";
import { device } from "../../breakpoints";

export const Wrapper = styled.div`
  background-image: linear-gradient(to right, #0e0e0e, #3c3109);
  border-bottom: solid 3px #c0c0c015;

  padding: 0 5x;
`;

// All 'Header' Elements
export const Content = styled.div`
  padding: 0 0;
  margin: 0 auto;
`;
// Logo + Site Name
export const TitleWrapper = styled.div`
  font-family: "Carter One", cursive;
  color: #ffffffc5;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media ${device.desktop} {
    font-size: 60px;
  }

  @media ${device.laptop} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    justify-content: space-evenly;
    font-size: 20px;
  }

  img {
    height: var(--iconHeight);

    @media (pointer: fine) {
      margin: 5px 50px;
    }
  }
`;

export const Navbar = styled.div`
  a {
    font-family: "Carter One", cursive;
    text-decoration: none;
    color: #ffffffc5;
  }
  ,
  a:visited {
    text-decoration: none;
  }

  a:active,
  a:hover {
    li {
      font-style: italic;

      @media ${device.desktop} {
        text-shadow: 0px 0px 2px #ffffff;
      }

      @media ${device.laptop} {
        text-shadow: 0px 0px 2px #ffffff;
      }

      @media ${device.tablet} {
        text-shadow: 0px 0px 2px #ffffff;
      }

      @media ${device.mobile} {
        text-shadow: 0px 0px 2px #ffffff;
      }
    }
  }

  // Overall Navbar
  ul {
    z-index: 10;
    padding: 0;
    margin: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    background-image: linear-gradient(to right, #0e0e0e, #3c3109);
    border-top: solid 3px #c0c0c015;

    @media ${device.desktop} {
      height: calc(var(--iconHeight) + 3px);
    }

    @media ${device.laptop} {
      height: calc(var(--iconHeight) - 7px);
    }

    @media ${device.tablet} {
      height: calc(var(--iconHeight) - 7px);
    }

    @media ${device.mobile} {
      height: calc(var(--iconHeight) + 13px);
    }
  }
  // Each Icon + Title
  li {
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: row;

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
  // Icon Only
  img {
    @media ${device.desktop} {
      width: 60px;
    }

    @media ${device.laptop} {
      width: 40px;
    }

    @media ${device.tablet} {
      width: 40px;
    }

    @media ${device.mobile} {
      width: 27px;
    }
  }
`;

import styled from "styled-components";
// vars from GlobalStyle.js
export const Wrapper = styled.div`
  background-color: var(--main);
  padding: 0 5x;
`;

// All 'Header' Elements
export const Content = styled.div`
  padding: 0 0;
  margin: 0 auto;
  color: white;
`;
// Logo + Site Name
export const TitleWrapper = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;

  @media (pointer: fine) {
    justify-content: center;
  }

  img {
    height: var(--iconHeight);

    @media (pointer: fine) {
      margin: 5px 50px;
    }
  }
`;

export const Navbar = styled.div`
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  a:active,
  a:hover {
    li {
      font-style: italic;
      background-color: black;
      /* padding: 0px 30px; */
      width: 130px;
      height: var(--iconHeight);

      @media (pointer: fine) {
        padding: 15px;
        height: calc(var(--iconHeight) - 10px);
      }

      @media (pointer: coarse) and (orientation: landscape) {
        background-color: black;
        padding: 10px;
        height: calc(var(--iconHeight) - 10px);
      }
      @media (pointer: coarse) and (min-width: 400px) {
        background-color: black;
        padding: 0px 30px;
        height: calc(var(--iconHeight));
        width: 25vw;
      }
    }
  }

  // Overall Navbar
  ul {
    z-index: 10;
    padding: 0;
    margin: 0;
    height: calc(var(--iconHeight));
    width: 100vw;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    background-color: var(--main);

    @media (pointer: fine) {
      height: calc(var(--iconHeight) - 10px);
      justify-content: space-around;
    }

    @media (pointer: coarse) and (orientation: landscape) {
      /* background-color: green; */
      height: calc(var(--iconHeight) - 10px);
      justify-content: space-around;
    }

    @media (pointer: coarse) and (min-width: 400px) {
      /* background-color: green; */
      height: calc(var(--iconHeight));
      justify-content: space-around;
    }
  }
  // Each Icon + Title
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    list-style: none;
    @media (pointer: fine) {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 0;
      justify-content: space-between;
      width: 7.5vw;
      height: calc(var(--iconHeight) - 10px);
    }

    @media (pointer: coarse) and (orientation: landscape) {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 0;
      justify-content: space-between;
      width: 7.5vw;
      height: calc(var(--iconHeight) - 10px);
    }

    @media (pointer: coarse) and (min-width: 400px) {
      /* background-color: green; */
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 0;
      justify-content: space-between;
      width: 17vw;
      height: calc(var(--iconHeight));
    }
  }
  // Icon Only
  img {
    width: 7vw;
    padding-right: 2px;
    margin-right: 5px;
    @media (pointer: fine) {
      width: calc(var(--iconHeight) - 10px);
    }

    @media (pointer: coarse) and (orientation: landscape) {
      /* background-color: black; */
      width: calc(var(--iconHeight) - 10px);
    }

    @media (pointer: coarse) and (min-width: 400px) {
      /* background-color: black; */
      width: 7vw;
      padding-right: 2px;
      margin-right: 5px;
    }
  }
`;

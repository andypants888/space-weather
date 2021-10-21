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
  font-size: var(--fontSuperBig);
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
  // Overall Navbar
  ul {
    list-style: none;
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
  }
  // Each Icon + Title
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    @media (pointer: fine) {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 0;
      justify-content: space-between;
      width: 7vw;
      height: calc(var(--iconHeight) - 10px);
    }
  }
  // Icon Only
  img {
    width: 7vw;
    @media (pointer: fine) {
      width: calc(var(--iconHeight) - 10px);
    }
  }
`;

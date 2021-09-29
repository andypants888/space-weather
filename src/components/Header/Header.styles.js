import styled from "styled-components";
// vars from GlobalStyle.js
export const Wrapper = styled.div`
  --iconHeight: 50px;
  background-color: var(--red);
  padding: 0 5px;

  @media screen and (min-width: 500px) {
    height: calc(var(--iconHeight) + 25px);
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 0 0;
  margin: 0 auto;
`;

export const TitleNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Title = styled.div`
  font-size: var(--fontSuperBig);
`;

export const Navbar = styled.div`
  /* background-color: black; */

  ul {
    list-style: none;
    padding: 5px;
    margin: 0;
    width: 500px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  height: var(--iconHeight);

  @media screen and (min-width: 500px) {
    position: absolute;
    height: calc(var(--iconHeight) + 25px);
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
/* background-color: grey; */
`;

export const Content = styled.div`
  /* z-index: -100; */
  `

export const NavBlock = styled.div`
  height: calc(var(--iconHeight));
  /* background-color: white; */
  @media (pointer:fine) {
    height: calc(var(--iconHeight) - 10px)
  }
`;
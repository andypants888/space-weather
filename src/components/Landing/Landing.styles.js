import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  img {
    position: fixed;
    left: 0px;
    bottom: 0px;
    overflow-y: hidden;
    z-index: -100;
    object-fit: cover;

    @media (pointer: coarse) {
      height: 85vh;
    }
    @media (pointer: fine) {
      width: 100vw;
      min-height: 95vh;
    }
  }
`;

export const Title = styled.div`
  position: fixed;

  // "Desktops"
  @media (pointer: fine) {
    left: 20vw;
    top: 55vh;
    max-width: 100vw;
  }
  h4 {
    font-size: 30px;
    font-weight: 100;
    margin: 0px;
    padding: 0px;
  }
  h1 {
    /* background-color: green; */
    font-size: 100px;
    /* background-color: red; */
    font-weight: 800;
    margin: 0px;
  }

  // "Phones"
  @media (pointer: coarse) {
    left: 10px;
    top: 40vh;
    max-width: 70vw;
    padding-left: 0px;

    h4 {
      font-size: 25px;
      font-weight: 300;
      /* background-color: white; */
      margin: 0px;
      padding: 0px;
    }
    h1 {
      font-size: 85px;
      /* background-color: red; */
      font-weight: 800;
      margin: 0px;
    }
  }
`;

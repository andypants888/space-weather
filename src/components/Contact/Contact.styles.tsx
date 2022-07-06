import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  /* position: absolute;
  left: 10%; */
  /* display: flex;
  flex-direction: column; */
  padding: 0 10%;

  a,
  a:visited {
    text-decoration: none;
    color: red;
  }

  img {
    @media (pointer: coarse) {
      width: 90%;
      height: 90%;
    }

    @media (pointer: fine) {
      width: 30%;
      height: 30%;
    }
  }
`;

export const BioBox = styled.div`
  @media (pointer: coarse) {
  }

  @media (pointer: fine) {
    display: flex;
    /* background-color: green; */
    width: 100%;
    height: 100% div {
      padding: 10px;
    }
    p {
      padding: 10px;
    }
  }
`;

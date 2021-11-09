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
      width: 100%;
    }

    @media (pointer: fine) {
      width: 30%;
    }
  }
`;

export const BioBox = styled.div`
@media (pointer: coarse) {
    }

    @media (pointer: fine) {
      display: flex;
      width: 80%;
      p {
        padding: 15px;
      }
    }
`;

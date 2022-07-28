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

  * {
    padding: 10px;
  }
  
  @media (pointer: fine) {
    display: flex;
    border 1px solid #ffffff18;
    width: 100%;
    height: 100% 
  }
`;

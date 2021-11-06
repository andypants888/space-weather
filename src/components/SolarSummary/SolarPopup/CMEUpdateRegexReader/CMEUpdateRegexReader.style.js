import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  font-family: monospace;
  font-size: 35px;
  margin-bottom: 5px;
  font-weight: 600;
  padding: 10px 0px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 15px;
  div {
    margin: 10px;
    word-break: break-all;
    min-width: 40%;
    /* background-color: grey; */
  }
  @media (pointer: coarse) {
    /* background-color: blue; */
    width: 100vw;
  }
  @media (pointer: fine) {
    /* background-color: red; */
  }
`;

export const Warning = styled.div`
  font-family: monospace;
  font-weight: 400;
  color: lightblue;
  padding: 5px;
`;

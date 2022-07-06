import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  background-color: #1AB394;
  /* display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: 20% 20% 20%;
  justify-content: center; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  /* transform: translate(15%, 0); */
  padding: 10px;
  margin: 0px;

  h1 {
    margin: 0;
  }

  @media (pointer: coarse) {
    iframe {
      display: block;
      width: 350px;
      height: 196px;
    }
  }
  @media (pointer: fine) {
    /* position: absolute;
    left: 25%; */
    /* max-width: 720px; */
    iframe {
      display: block;
      width: 800px;
      height: 450px;
    }
  }
`;

export const SurveyContainer = styled.div`
  margin-top: 10px;
  @media (pointer: coarse) {
    width: 350px;
    /* width: auto; */
    /* height: 196px; */
  }

  @media (pointer: fine) {
    width: 560px;
    /* height: 315px; */
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: grid;
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  @media (pointer: coarse) {
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 5px;
    grid-template-rows: auto auto;
    grid-row-gap: 35px;
    padding: 5px;
  }
  @media (pointer: fine) {
    grid-template-columns: 18% 18% 18%;
    grid-column-gap: 20px;
    grid-template-rows: auto auto;
    grid-row-gap: 5px;
    padding: 30px;

    position: relative;
    margin-left: 25%;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  margin-left: 10px;
  margin-top: 10px;
  font-family: monospace;

  @media (pointer: coarse) {
  }
  @media (pointer: fine) {
    position: relative;
    margin-left: 25%;
  }
`;

export const Card = styled.div`
  border-style: solid;
  border-color: white;
  border-width: 3px;
  border-radius: 15px;
  padding: 15px;
  background-color: black;
  margin-bottom: auto;

  img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 5px;

    position: relative;
  }
`;

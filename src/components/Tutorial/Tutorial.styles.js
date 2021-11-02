import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: grid;

  @media (any-pointer: coarse) {
    background-color: red;

    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 5px;
    grid-template-rows: auto auto;
    grid-row-gap: 35px;
    padding: 5px;
  }
  @media (any-pointer: fine) {
    background-color: green;

    grid-template-columns: 15% 15% 15%;
    grid-column-gap: 5px;
    grid-template-rows: auto auto;
    grid-row-gap: 5px;
    padding: 30px;
  }
`;

export const Title = styled.div``;

export const Card = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  padding: 10px;
  background-color: blue;
  img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 5px;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  padding: 0 0;
  margin: 0 auto;
  color: white;
  border: 1px solid white;
`;

export const SolarEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  padding: 5px;
  margin: 0px 5px;
  text-align: center;
  img {
    width: var(--iconHeight);
  }

  h3 {
    padding: 5px;
    flex-basis: 250px;
  }

  button {
    flex-basis: 40px;
    color: black;
    font-size: 12px;
    line-height: 15px;
    margin: 10px 0px;
    padding: 6px;
    border-radius: 6px;
    font-family: Tahoma, Geneva, sans-serif;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    background-image: linear-gradient(
      to right,
      rgb(255, 240, 0) 0%,
      rgb(30, 255, 0) 100%
    );
    /* box-shadow: #42ff0c 3px 2px 15px 0px; */
    border: 2px solid rgba(0, 0, 0);
  }
  button:hover {
    @media (pointer: fine) {
      background: #ff0000;
    }
  }
  button:active {
    background: #ff7e00;
  }
`;

export const Icon = styled.div``;

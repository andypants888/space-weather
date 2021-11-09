import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 20;
`;

export const Content = styled.div`
  /* padding: 0 0; */
  /* margin: 0 auto; */
  color: white;
  background-color: black;
  width: 97%;
  height: 87%;
  position: fixed;
  padding: 0px 30px;
  top: 5%;
  left: 1.5%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
  /* overflow-y: scroll; */
  border: 2px solid white;
`;

export const Dimmer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: -10; */
  /* left: 0; */

  @media (pointer: fine) {
    /* bottom: 0px; */
  }
`;

export const CloseBanner = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 15px 0px 0px;
  flex-direction: column;
  /* background-color: red; */
  position: sticky;
  top: -5px;
  left: 5px;
  button {
    color: black;
    font-size: 20px;
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
    box-shadow: #42ff0c 3px 2px 15px 0px;
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  text-align: center;
  img {
    margin: 0px 20px;
    width: calc(var(--iconHeight) * 2);
  }
`;

export const OneLiner = styled.div`
  font-family: monospace;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const GifContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: monospace;
  iframe {
    width: 100%;
    height: 150px;
    pointer-events: none;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  @media (pointer: fine) {
    margin: 20px 0px;
    iframe {
      width: 100%;
      height: 270px;
      pointer-events: none;
      margin: 5px 0px;
    }
  }
`;

export const TextContainer = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const LearnMore = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;


  div {
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: rgb(232, 255, 0);
    background: linear-gradient(
      90deg,
      rgba(232, 255, 0, 1) 0%,
      rgba(14, 255, 0, 1) 100%
    );
    box-shadow: #42ff0c 3px 2px 15px 0px;
    border-radius: 6px;
    color: black;
    font-size: 20px;
  }

  button {
    color: rgb(255, 255, 255);
    font-size: 26px;
    line-height: 26px;
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
      rgb(255, 0, 0) 0%,
      rgb(255, 126, 0) 100%
    );
    box-shadow: rgb(255, 0, 0) 3px 2px 15px 0px;
    border: 2px none rgb(28, 110, 164);
    display: inline-block;
  }
  button:hover {
    @media (pointer: fine) {
      background: #42ff0c;
    }
  }
  button:active {
    background: #42ff0c;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  /* background-color: brown; */
  padding-bottom: 10px;
  a {
    color: var(--main);
    /* width: 100% */
  }
`;

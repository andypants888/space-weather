import styled from "styled-components";
import { device } from "../breakpoints";

export const Wrapper = styled.div`
  height: 100%;
  /* background-image: linear-gradient(-40deg, #3e3836, #070606); */
`;

export const Content = styled.div`
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media ${device.desktop} {
    /* background-color: #000000; */
    /* background-image: linear-gradient(-40deg, #3e3836, #070606); */

    display: grid;
  }
  @media ${device.laptop} {
    /* background-color: #8a0000; */

    display: grid;
  }
  @media ${device.tablet} {
    /* background-color: #6668ff; */
    display: block;
  }
  @media ${device.mobile} {
    /* background-color: #1900ff; */
    display: block;
  }
`;

export const DailyWrapper = styled.div`
  /* background-color: #00640086; */
`;

export const DailyItems = styled.div`
  @media ${device.desktop} {
    img {
      max-height: 120px;
      max-width: 120px;
    }
    /* background-color: #00c400; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "DailyA DailyA DailyA"
      "DailyB DailyC DailyD";
    grid-template-rows: 300px 200px;
  }

  @media ${device.laptop} {
    img {
      max-height: 120px;
      max-width: 120px;
    }
    /* background-color: #00c6e1; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "DailyA DailyA DailyA"
      "DailyB DailyC DailyD";
    grid-template-rows: 250px 200px;
  }

  @media ${device.tablet} {
    display: block;
    /* background-color: #5200f7; */
  }

  @media ${device.mobile} {
    display: block;
    /* background-color: #c400ba; */
    /* grid-template-rows: 250px 250px; */
  }
`;

export const DailyA = styled.div`
  grid-area: DailyA;
  /* border: 1px solid white; */
  border-radius: 20px;
  margin: 0px 5px 0px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-image: linear-gradient(-40deg, #3e3836, #070606);

  /* width: 98%; */
  /* height: 500px; */

  @media ${device.desktop} {
    margin: 0px 15px 0px 15px;
  }

  @media ${device.laptop} {
    margin: 0px 12px 0px 12px;
  }

  @media ${device.tablet} {
    margin: 0px 10px 0px 10px;
  }

  @media ${device.mobile} {
    margin: 0px 5px 0px 5px;
  }
`;

export const DailyB = styled.div`
  grid-area: DailyB;
`;
export const DailyC = styled.div`
  grid-area: DailyC;
`;
export const DailyD = styled.div`
  grid-area: DailyD;
`;

export const ItemTitle = styled.h3`
  /* font-family: "Carter One", cursive; */
  /* font-family: "Rubik", sans-serif; */
  font-weight: 100;
  font-style: italic;
  /* font-size: 30px; */
`;

export const ItemWrapperA = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  * {
    /* border: 1px solid white; */
    margin: 0px;
  }
  @media ${device.desktop} {
    h1 {
      font-size: 120px;
      text-shadow: 7px 7px 2px #ffffff57;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 80px;
      text-shadow: 5px 5px 2px #ffffff57;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 70px;
      text-shadow: 4px 4px 2px #ffffff57;
    }
    img {
      max-height: 100px;
      max-width: 100px;
    }
  }

  @media ${device.mobile} {
    h1 {
      font-size: 50px;
      text-shadow: 3px 3px 2px #ffffff57;
    }
    img {
      max-height: 90px;
      max-width: 90px;
    }
  }
`;
export const ItemWrapperBCD = styled.div`
  /* border: 1px solid white; */
  border-radius: 20px;
  background-image: linear-gradient(-40deg, #3e3836, #070606);

  @media ${device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 310px;
    flex-direction: column;
    margin: 45px 15px 15px 15px;

    * {
      margin: 15px;
    }
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 290px;
    flex-direction: column;
    margin: 25px 12px 12px 12px;

    * {
      margin: 15px;
    }
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    height: 90px;
    margin: 15px 10px 10px 10px;

    * {
      margin: 5px;
      width: 10%;
      /* border: white dashed 1px; */
    }

    img {
      max-height: 60px;
      max-width: 60px;
    }
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 75px;
    margin: 12px 5px 12px 5px;

    * {
      width: 15%;
    }

    img {
      max-height: 40px;
      max-width: 40px;
    }
  }
`;

export const ItemWrapperB = styled.div``;

export const EventsWrapper = styled.div`
  /* background-color: brown; */
`;

export const SolarEvents = styled.div`
  /* background-color: purple; */
  /* width: auto; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  /* use JS & react to adjust size of component dynamically */
  /* max-height: 100vh; */
`;

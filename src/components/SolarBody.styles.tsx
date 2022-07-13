import styled from "styled-components";
import { device } from "../breakpoints";

export const Wrapper = styled.div``;

export const Content = styled.div`
  /* background-color: blue; */
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;

  /* background-color: #ffffff; */
  @media ${device.desktop} {
    background-color: #000000;
  }
  @media ${device.laptop} {
    background-color: #8a0000;
  }
  @media ${device.tablet} {
    background-color: #6668ff;
  }
  @media ${device.mobile} {
    background-color: #1900ff;
    display: block;
  }
`;

export const DailyWrapper = styled.div`
  background-color: #00640086;
`;

export const DailyItems = styled.div`
  background-color: #00c400;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "DailyA DailyA DailyA"
    "DailyB DailyC DailyD";
  /* font-family: Tahoma, Geneva, sans-serif; */
  /* font-size: 12px; */
  /* border: 1px solid white; */
  img {
    @media ${device.desktop} {
      max-height: 120px;
      max-width: 120px;
    }

    @media ${device.laptop} {
      max-height: 120px;
      max-width: 120px;
    }

    @media ${device.tablet} {
      max-height: 100px;
      max-width: 100px;
    }

    @media ${device.mobile} {
      max-height: 70px;
      max-width: 70px;
    }
  }

  @media ${device.desktop} {
    grid-template-rows: 300px 200px;
  }
  @media ${device.laptop} {
    grid-template-rows: 250px 200px;
  }
  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    grid-template-rows: 250px 250px;
  }
`;

export const DailyA = styled.div`
  grid-area: DailyA;
  border: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* background-color: gold; */
  /* width: 98%; */
  /* height: 500px; */
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
  /* min-width: 100px; */
  /* background-color: #ff0000; */
  /* height: 500px; */
  * {
    /* border: 1px solid white; */
    margin: 0px;
  }
  @media ${device.desktop} {
    h1 {
      font-size: 120px;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 80px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 50px;
    }
  }

  @media ${device.mobile} {
  }
`;
export const ItemWrapperBCD = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  * {
    /* border: 1px solid white; */
    margin: 5px;
  }

  @media ${device.desktop} {
    height: 310px;
  }

  @media ${device.laptop} {
    height: 290px;
  }

  @media ${device.tablet} {
    height: 270px;
  }

  @media ${device.mobile} {
    height: 250px;
  }
`;

export const EventsWrapper = styled.div`
  background-color: brown;
`;

export const SolarEvents = styled.div`
  background-color: purple;
  /* width: auto; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  /* use JS & react to adjust size of component dynamically */
  /* max-height: 100vh; */
`;

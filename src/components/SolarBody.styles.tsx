import styled from "styled-components";
import { device } from "../breakpoints";

export const Wrapper = styled.div`
  @media ${device.desktop} {
    height: 85vh;
  }
  @media ${device.laptop} {
    height: 100%;
  }
  @media ${device.tablet} {
    height: 100%;
  }
  @media ${device.mobile} {
    height: 100%;
  }
`;

export const Content = styled.div`
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media ${device.desktop} {
    display: grid;
  }
  @media ${device.laptop} {
    display: grid;
  }
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.mobile} {
    display: block;
  }
`;

export const DailyWrapper = styled.div``;

export const DailyItems = styled.div`
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "DailyA DailyA DailyA"
      "DailyB DailyC DailyD";
    grid-template-rows: 300px 200px;

    img {
      max-height: 120px;
      max-width: 120px;
    }
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "DailyA DailyA DailyA"
      "DailyB DailyC DailyD";
    grid-template-rows: 250px 200px;

    img {
      max-height: 120px;
      max-width: 120px;
    }
  }

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: block;
  }
`;

export const DailyA = styled.div`
  grid-area: DailyA;
  border-radius: 20px;
  margin: 0px 5px 0px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-image: linear-gradient(-40deg, #3e3836, #070606);
  box-shadow: -2px -2px 3px #3b3a39;

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
    font-size: 13px;
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
  font-weight: 100;
  font-style: italic;
`;

export const ItemWrapperA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  * {
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
  border-radius: 20px;
  background-image: linear-gradient(-40deg, #3e3836, #070606);
  box-shadow: -2px -2px 3px #3b3a39;

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

export const EventsWrapper = styled.div``;

export const SolarEvents = styled.div`
  height: 75vh;
  padding: 3px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
`;

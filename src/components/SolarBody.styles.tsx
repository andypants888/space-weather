import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  /* background-color: blue; */
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const DailyWrapper = styled.div`
  background-color: darkgreen;
`;

export const DailyItems = styled.div`
  background-color: green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  grid-template-areas:
    "DailyA DailyA DailyA"
    "DailyB DailyC DailyD";

  /* border: 1px solid white; */
  img {
    max-height: 120px;
    max-width: 120px;
  }
`;

export const DailyA = styled.div`
  grid-area: DailyA;
  border: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ItemWrapperA = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* max-width: 150px; */
  * {
    /* border: 1px solid white; */
    margin: 5px;
  }
  h1 {
    font-size: 80px;
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
export const ItemWrapperBCD = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  * {
    /* border: 1px solid white; */
    margin: 5px;
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
`;

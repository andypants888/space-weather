import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: grid; */
  width: 95%;
  margin: 0 auto;
  /* gap: 50px; */
  /* grid-template-columns: 1fr 1fr; */
  /* background-color: white; */
`;

export const Content = styled.div`
  /* background-color: blue; */
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`;

export const DailyA = styled.div`
  grid-area: DailyA;
  border: 1px solid white;
`;
export const DailyB = styled.div`
  grid-area: DailyB;
  border: 1px solid white;
`;
export const DailyC = styled.div`
  grid-area: DailyC;
  border: 1px solid white;
`;
export const DailyD = styled.div`
  grid-area: DailyD;
  border: 1px solid white;
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
  /* border: 1px solid white; */
`;

import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding: 0 0;
  margin: 0 auto;
  color: white;
  border: 1px solid white;

  @media (pointer:fine) {
    /* position: relative; */
    /* margin-left: 150px; */
    /* z-index: -10; */
  }
`;

export const SolarEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
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
    /* padding-left: -10px; */
    /* z-index: 10; */
  }
`;

export const Icon = styled.div``;

export const Title = styled.div``;

export const OriginalTime = styled.div``;

export const MoreInfo = styled.div`
  button {
    padding: 10px;
    /* width: 10%; */
  }
`;

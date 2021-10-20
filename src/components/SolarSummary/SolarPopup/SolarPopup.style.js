import styled from "styled-components";

export const Wrapper = styled.div``;

// All 'Header' Elements
export const Content = styled.div`
  padding: 0 0;
  margin: 0 auto;
  color: white;
  background-color: black;
  max-width: var(--maxWidth);
  position: sticky;
  top: 0px;
  display: flex;
  /* justify-content: start; */
  align-items: center;
  flex-direction: column;
  overflow: auto;

  border-style: solid;
  a {
    color: var(--red);
  }

  img {
    width: calc(var(--iconHeight) * 2);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: green; */
    font-size:20px;
  }
`;

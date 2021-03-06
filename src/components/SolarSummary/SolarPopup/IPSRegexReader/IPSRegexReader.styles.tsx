import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  font-family: monospace;
  font-size: 35px;
  margin-bottom: 5px;
  font-weight: 600;
  padding: 10px 0px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: auto;
  white-space: pre-wrap;
`;

export const Date = styled.div`
  font-family: monospace;
  font-weight: 400;
  color: orange;
  font-size: 20px;
  margin: 10px 0px;
`;

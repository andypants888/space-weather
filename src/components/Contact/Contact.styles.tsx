import styled from "styled-components";
import { device } from "../../breakpoints";

export const Wrapper = styled.div``;

export const Content = styled.div`
  padding: 0 10%;

  a,
  a:visited {
    text-decoration: none;
    color: red;
  }

  @media ${device.desktop} {
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media ${device.laptop} {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media ${device.tablet} {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media ${device.mobile} {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Bio = styled.div`
  @media ${device.desktop} {
    width: 50%;
    display: flex;
    border: 1px solid #ffffff18;
    padding: 20px 0px 20px 20px;

    div {
      padding: 20px;
    }
  }

  @media ${device.laptop} {
    width: 100%;
    display: flex;
    border: 1px solid #ffffff18;
    padding: 20px 0px 20px 20px;

    div {
      padding: 20px;
    }
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ffffff18;
    padding: 30px 0px 0px 0px;
    div {
      padding: 10px;
    }
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ffffff18;
    padding: 20px 0px 0px 0px;
    div {
      padding: 10px;
    }
  }
`;

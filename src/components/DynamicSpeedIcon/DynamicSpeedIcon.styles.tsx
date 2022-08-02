import styled from "styled-components";
import { device } from "../../breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

import React from "react";
import Low1Icon from "../../icons/speedLow1.png";
import Low2Icon from "../../icons/speedLow2.png";
import Med1Icon from "../../icons/speedMed1.png";
import Med2Icon from "../../icons/speedMed2.png";
import High1Icon from "../../icons/speedHigh1.png";
import High2Icon from "../../icons/speedHigh2.png";
import FailedIcon from "../../icons/failed.png";
import { Wrapper } from "./DynamicSpeedIcon.styles";

const DynamicSpeedIcon = (props: { windSpeed: number }) => {
  switch (true) {
    case props.windSpeed >= 1200:
      return (
        <div>
          <img src={High2Icon} alt="very high speed" />
          <h2>Very High Speed</h2>
        </div>
      );
    case props.windSpeed >= 1000 && props.windSpeed < 1200:
      return (
        <div>
          <img src={High1Icon} alt="high speed" />
          <h2>High Speed</h2>
        </div>
      );
    case props.windSpeed >= 800 && props.windSpeed < 1000:
      return (
        <div>
          <img src={Med2Icon} alt="medium-high speed" />
          <h2>Medium-High Speed</h2>
        </div>
      );
    case props.windSpeed >= 600 && props.windSpeed < 800:
      return (
        <div>
          <img src={Med1Icon} alt="medium speed" />
          <h2>Medium Speed</h2>
        </div>
      );
    case props.windSpeed >= 400 && props.windSpeed < 600:
      return (
        <Wrapper>
          <img src={Low2Icon} alt="low speed" />
          <h2>Low Speed</h2>
        </Wrapper>
      );
    case props.windSpeed >= 1 && props.windSpeed < 400:
      return (
        <Wrapper>
          <img src={Low1Icon} alt="very low speed" />
          <h2>Very Low Speed</h2>
        </Wrapper>
      );
    case props.windSpeed === 0:
      return (
        <div>
          <img src={FailedIcon} alt="failed connection" />
          <h2>Connection Failure</h2>
        </div>
      );
    default:
      return null;
  }
};

export default DynamicSpeedIcon;

import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Warning,
} from "./CMERegexReader.style.js";

const CMERegexReader = (props) => {
  const { message, eventType, eventTime } = props;
  const detailedTime = eventTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long",
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  // Switch Regex Cases
  // const ipsRegex =
  //   /(Message Type: Space Weather Notification - Interplanetary Shock)/g;
  // const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
  // const cmeUpdateRegex = /(CME update)/g;
  // const cmeStandardRegex =
  //   /(Message Type: Space Weather Notification - CME \()/g;
  // const rbeStandardRegex =
  //   /(Message Type: Space Weather Notification - Radiation Belt Enhancement)/g;

  // Shared Regex Markers

  // cmeStandard Regex Markers
  const potentialImpact = /(\()\S+.*/;
  const cmeType = /(.-type CME.*)/g;
  const cmeSpeed = /Estimated speed: ~\d\d\d \w\w.\w/g;
  const cmeChart = /.?.-type:.*/g;
  const nearEarth = /(NASA missions near Earth at ).*(Z)/g;
  const nearEarthTimeRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
  const nearEarthUTC = message.match(nearEarth)[0].match(nearEarthTimeRegex);
  const nearEarthJSDate = new Date(nearEarthUTC);
  const nearEarthLocal = nearEarthJSDate.toLocaleString("en-US", {
    // weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // cmeUpdate Regex Markers

  return (
    <Wrapper>
      <Content>
        <Title>{message.match(cmeType)}</Title>
        <Main>
          <div>Original Event Time: {detailedTime}</div>
          <div>{message.match(cmeSpeed)}</div>
          <div>{`Impact Direction: ${message.match(potentialImpact)[0]}`}</div>
          <div>
            {`Estimated arrival to near Earth missions: ${nearEarthLocal}  `}
            <br />
            <br />
            <Warning>
              (Warning: Estimates based on early simulations. Estimated arrival
              time is plus/minus 7 hours)
            </Warning>
          </div>
        </Main>

        <Title>{`CME-types Chart`}</Title>
        <div>
          {message.match(cmeChart).map((type) => (
            <div>{type}</div>
          ))}
        </div>
      </Content>
    </Wrapper>
  );
};

export default CMERegexReader;

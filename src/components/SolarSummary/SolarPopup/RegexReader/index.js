import React from "react";

// Styles
import { Wrapper, Content } from "./RegexReader.style.js";

const RegexReader = (props) => {
  const { message, eventType, eventTime } = props;
  const detailedTime = eventTime.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
  // Switch Regex Cases
  const ipsRegex =
    /(Message Type: Space Weather Notification - Interplanetary Shock)/g;
  const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
  const cmeUpdateRegex = /(CME update)/g;
  const cmeStandardRegex =
    /(Message Type: Space Weather Notification - CME \()/g;
  const rbeStandardRegex =
    /(Message Type: Space Weather Notification - Radiation Belt Enhancement)/g;

  // cmeStandard Regex Key Points
  const potentialImpact = /(\()\S+.*/;
  const cmeType = /(.-type CME.*)/g;
  const cmeSpeed = /Estimated speed: ~\d\d\d \w\w.\w/g;
  const cmeChart = /.?.-type:.*/g;
  const nearEarth = /(NASA missions near Earth at ).*(s\).)/g;
  const nearEarthTimeRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
  const nearEarthUTC = message.match(nearEarth)[0].match(nearEarthTimeRegex);
  const nearEarthJSDate = new Date(nearEarthUTC);
  const nearEarthLocal = nearEarthJSDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  switch (true) {
    case cmeStandardRegex.test(message):
      return (
        <Wrapper>
          <Content>
          {/* {nearEarthLocal} */}
            <div>{eventType}</div>
            <div>Local Event Time: {detailedTime}</div>
            <div>{message.match(cmeSpeed)}</div>
            <div>{message.match(cmeType)}</div>

            {/* {console.log(message.match(cmeChart))} */}

            <div>{`Event may impact: ${
              message.match(potentialImpact)[0]
            }`}</div>

            <div>Expected Impact: {message.match(nearEarth)[0].replace(/(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g, '')} {nearEarthLocal} (disclaimer: based on early simulations)</div>
            {message.match(cmeChart).map((type) => (
              <div>{type}</div>
            ))}
            {/* {console.log(message.match(potentialImpact))} */}
            {/* {message} */}
          </Content>
        </Wrapper>
      );
    default:
      return null;
  }
};

export default RegexReader;

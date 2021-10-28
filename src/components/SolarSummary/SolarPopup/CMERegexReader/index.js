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
  const nearEarth = /reach \w.*/g;
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


  // Regex Markers
  const discoverRegex = /reach \w.*/;
  let discoverText = [];

  const discoverList = message.match(discoverRegex)
  // UTC --> Local "Discovered At" Only
  for (let i = 0; i < discoverList.length; i++) {
    const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
    const UTCDates = discoverList[i].match(UTCDatesRegex);
    const JSDateArr = UTCDates.map((utc) => new Date(utc));
    const LocalDateArr = JSDateArr.map((date) =>
      date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // timeZoneName: "short",
      })
    );

    // console.log(UTCDates);
    // console.log("sateliteImpactText: ", sateliteImpactText);

    for (let j = 0; j < JSDateArr.length; j++) {
      let replaced = discoverList[i].replace(UTCDates[j], LocalDateArr[j]);
    //   console.log(replaced);
      discoverList[i] = replaced;
      if (!UTCDatesRegex.test(discoverList[i])) {
        discoverText.push(discoverList[i]);
      }
    }
  }
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
            {`Estimated arrival: ${discoverText}  `}
            <br />
            <br />
            <Warning>
              (Warning: Estimates based on early simulations. Estimated arrival
              time is plus/minus 7 hours)
            </Warning>
          </div>
        </Main>

        <Title>{`CME-types Chart`}</Title>
        <div>ER-type: Extremely Rare (3000 km/s+)</div>
        <div>R-type: Rare (2000-2999 km/s)</div>
        <div>O-type: Occasional (1000-1999 km/s)</div>
        <div>C-type: Common (500-999 km/s)</div>
        <div>S-type: Less than (500 km/s)</div>
      </Content>
    </Wrapper>
  );
};

export default CMERegexReader;

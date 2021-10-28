import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Warning,
} from "./IPSRegexReader.style.js";

const IPSRegexReader = (props) => {
  const { message, eventType, eventTime } = props;
  const detailedTime = eventTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long",
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // Regex Markers
  const discoverRegex = /Significant .*/;
  const causeRegex = /The shock .*/g;
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

  return (
    <Wrapper>
      <Content>
        <Title>IPS Event</Title>
        <Main>
          <div>{discoverText}</div>
          <div>{message.match(causeRegex)}</div>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default IPSRegexReader;

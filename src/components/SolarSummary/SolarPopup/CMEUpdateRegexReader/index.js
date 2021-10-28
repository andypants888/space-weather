import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Warning,
} from "./CMEUpdateRegexReader.style.js";

const CMEUpdateRegexReader = (props) => {
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
  const impactSatelites = /- [A-Z].*between.*/g;
  const impactEarth = /Additionally .*\)\./g;

  // UTC Replacer Code Shared Variables
  let sateliteImpactText = [];
  let earthImpactText = [];
  const sateliteList = message.match(impactSatelites);
  const earthImpactList = message.match(impactEarth);

  // UTC --> Local Satelite Only
  for (let i = 0; i < sateliteList.length; i++) {
    const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
    const UTCDates = sateliteList[i].match(UTCDatesRegex);
    const JSDateArr = UTCDates.map((utc) => new Date(utc));
    const LocalDateArr = JSDateArr.map((date) =>
      date.toLocaleString("en-US", {
        weekday: "short",
        // month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // timeZoneName: "short",
      })
    );

    // console.log(UTCDates);
    // console.log("sateliteImpactText: ", sateliteImpactText);

    for (let j = 0; j < JSDateArr.length; j++) {
      let replaced = sateliteList[i].replace(UTCDates[j], LocalDateArr[j]);
      // console.log(replaced);
      sateliteList[i] = replaced;
      if (!UTCDatesRegex.test(sateliteList[i])) {
        sateliteImpactText.push(sateliteList[i]);
      }
    }
  }
// UTC --> Local Earth Impact Only
  for (let i = 0; i < earthImpactList.length; i++) {
    const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
    const UTCDates = earthImpactList[i].match(UTCDatesRegex);
    const JSDateArr = UTCDates.map((utc) => new Date(utc));
    const LocalDateArr = JSDateArr.map((date) =>
      date.toLocaleString("en-US", {
        weekday: "short",
        // month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // timeZoneName: "short",
      })
    );

    // console.log(UTCDates);
    // console.log("sateliteImpactText: ", sateliteImpactText);

    for (let j = 0; j < JSDateArr.length; j++) {
      let replaced = earthImpactList[i].replace(UTCDates[j], LocalDateArr[j]);
      // console.log(replaced);
      earthImpactList[i] = replaced;
      if (!UTCDatesRegex.test(earthImpactList[i])) {
        earthImpactText.push(earthImpactList[i]);
      }
    }
  }
  return (
    <Wrapper>
      <Content>
        <Main>
        <Title>CME Update</Title>
          <div><h3>Update Released:</h3></div>
          <div>{detailedTime}</div>
          <Warning>
            BETA PRODUCT. ENSEMBLE (Update) PRODUCT IS STILL IN DEVELOPMENT
            MODE.
          </Warning>
          <Title>Predicted Impact Times:</Title>
          <div><h3>Earth & Near Earth:</h3></div>
          {earthImpactText.map(item => <div>{item}</div>)}
          <div><h3>Satelite(s):</h3></div>
          {sateliteImpactText.map(item => <div>{item}</div>)}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default CMEUpdateRegexReader;

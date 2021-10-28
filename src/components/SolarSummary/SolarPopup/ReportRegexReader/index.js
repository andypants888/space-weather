import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Warning,
} from "./ReportRegexReader.style.js";

const ReportRegexReader = (props) => {
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
  const solarWeekRegex = /Solar activity was .*/g;
  const geomagneticWeekRegex = /Geomagnetic activity was .*(period\.)/g;
  const nearEarthWeekRegex = /Space weather impacts on NASA .*/g;
  const outlookDatesRegex = /## Outlook .*/g;
  const solarOutlookRegex = /(S|s)olar activity is expected .*/g;
  const geomagneticOutlookRegex = /Geomagnetic activity is expected .*/g;

  // Shared Date Replace Loop
  let geomagneticOutlookLocal = [];
  let datesOutlookLocal = [];
  const discoverGeomagneticList = message.match(geomagneticOutlookRegex);
  const discoverDatesOutlookList = message.match(outlookDatesRegex);

  // console.log(discoverGeomagneticList);

  // GeoMagnetic UTC --> Local

  for (let i = 0; i < discoverGeomagneticList.length; i++) {
    const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ?)/g;
    const UTCDates = discoverGeomagneticList[i].match(UTCDatesRegex);
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

    for (let j = 0; j < JSDateArr.length; j++) {
      let replaced = discoverGeomagneticList[i].replace(
        UTCDates[j],
        LocalDateArr[j]
      );
      // console.log(replaced);
      discoverGeomagneticList[i] = replaced;
      if (!UTCDatesRegex.test(discoverGeomagneticList[i])) {
        geomagneticOutlookLocal.push(`${discoverGeomagneticList[i]}`);
      }
    }
  }

  // dates Outlook Range UTC --> Local
  for (let i = 0; i < discoverDatesOutlookList.length; i++) {
    const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ?)/g;
    const UTCDates = discoverDatesOutlookList[i].match(UTCDatesRegex);
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

    for (let j = 0; j < JSDateArr.length; j++) {
      let replaced = discoverDatesOutlookList[i].replace(
        UTCDates[j],
        LocalDateArr[j]
      );
      // console.log(replaced);
      discoverDatesOutlookList[i] = replaced;
      if (!UTCDatesRegex.test(discoverDatesOutlookList[i])) {
        datesOutlookLocal.push(discoverDatesOutlookList[i]);
      }
    }
  }

  return (
    <Wrapper>
      <Content>
        <Title>Weekly Report</Title>
        <Main>
          <div>Released: {detailedTime}</div>
          <div>{message.match(solarWeekRegex)}</div>
          <div>{message.match(geomagneticWeekRegex)}</div>
          <div>{message.match(nearEarthWeekRegex)}</div>
          <div>{datesOutlookLocal[0]}</div>
          <div>{datesOutlookLocal[1]}</div>
          <div>{message.match(solarOutlookRegex)}</div>
          <div>{geomagneticOutlookLocal}</div>
        </Main>
        {/* <Main>{message.match(geomagneticOutlookRegex)}</Main> */}
      </Content>
    </Wrapper>
  );
};

export default ReportRegexReader;

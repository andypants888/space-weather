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

  // cmeStandard Regex Markers
  const summaryBrute = /## Summary:.*(##)/gs;

  // const potentialImpact = /(\()\S+.*/;
  // const cmeType = /(.-type CME.*)/g;
  // const cmeSpeed = /Estimated speed: ~\d\d\d \w\w.\w/g;
  // const nearEarth = /reach \w.*/g;
  // const nearEarthTimeRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
  // const nearEarthUTC = message.match(nearEarth)[0].match(nearEarthTimeRegex);
  // const nearEarthJSDate = new Date(nearEarthUTC);
  // const nearEarthLocal = nearEarthJSDate.toLocaleString("en-US", {
  //   // weekday: "long",
  //   month: "short",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZoneName: "short",
  // });

  // // Regex Markers
  // const discoverRegex = /reach \w.*/;
  // let discoverText = [];

  // const discoverList = message.match(discoverRegex)
  // // UTC --> Local "Discovered At" Only
  // for (let i = 0; i < discoverList.length; i++) {
  //   const UTCDatesRegex = /(\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\dZ)/g;
  //   const UTCDates = discoverList[i].match(UTCDatesRegex);
  //   const JSDateArr = UTCDates.map((utc) => new Date(utc));
  //   const LocalDateArr = JSDateArr.map((date) =>
  //     date.toLocaleString("en-US", {
  //       weekday: "short",
  //       month: "short",
  //       day: "numeric",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       // timeZoneName: "short",
  //     })
  //   );

  //   // console.log(UTCDates);
  //   // console.log("sateliteImpactText: ", sateliteImpactText);

  //   for (let j = 0; j < JSDateArr.length; j++) {
  //     let replaced = discoverList[i].replace(UTCDates[j], LocalDateArr[j]);
  //   //   console.log(replaced);
  //     discoverList[i] = replaced;
  //     if (!UTCDatesRegex.test(discoverList[i])) {
  //       discoverText.push(discoverList[i]);
  //     }
  //   }
  // }
  // // cmeUpdate Regex Markers

  return (
    <Wrapper>
      <Content>
        <Title>New Eruption of Solar Gas & Plasma</Title>
        <Main>
          <div>{detailedTime}</div>
          <div>{message.match(summaryBrute)}</div>
        </Main>

        <Title>{`CME-types Chart`}</Title>
        <Main>
          <div>
            ER-type <strong>(Extremely Rare)</strong> 3000 km/s+ <br />
            R-type <strong>(Rare)</strong> 2000-2999 km/s <br />
            O-type <strong>(Occasional)</strong> 1000-1999 km/s <br />
            C-type <strong>(Common)</strong> 500-999 km/s <br />
            S-type <strong>(Less)</strong> than 500 km/s <br />
          </div>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default CMERegexReader;

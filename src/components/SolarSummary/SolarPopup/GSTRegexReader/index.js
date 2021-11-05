import React from "react";

// Styles
import { Wrapper, Content, Title, Main } from "./GSTRegexReader.style.js";

const GSTRegexReader = (props) => {
  const { message, eventType, eventTime } = props;

  // Notification Event Time
  const detailedTime = eventTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long",
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // Regex Markers
  // const activityID = /Activity ID: \d\d\d\d-\d\d-\d\d.*/g;
  const summaryBrute = /## Summary:.*(##)/gs;

  return (
    <Wrapper>
      <Content>
        <Title>Geomagnetic Storm Ongoing</Title>
        <Main>
          <div>{detailedTime}</div>
          <div>{message.match(summaryBrute)}</div>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default GSTRegexReader;

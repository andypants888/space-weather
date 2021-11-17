import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Date,
} from "./IPSRegexReader.style.js";

const IPSRegexReader = (props) => {
  const { message, eventTime } = props;
  const detailedTime = eventTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long",
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // Regex Markers
  const summaryBrute = /## Summary:.*(##)/gs;

  return (
    <Wrapper>
      <Content>
        <Title>IPS Event</Title>
        <Main>
          <div><Date>{detailedTime}</Date></div>
          <div>{message.match(summaryBrute)}</div>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default IPSRegexReader;

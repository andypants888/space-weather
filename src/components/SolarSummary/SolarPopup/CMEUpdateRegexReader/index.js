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
  const summaryBrute = /## Summary:.*(##)/gs;

  return (
    <Wrapper>
      <Content>
        <Title>Analysis of previous CME</Title>
        <Warning>
          BETA PRODUCT. ENSEMBLE (Update) PRODUCT IS STILL IN DEVELOPMENT MODE.
        </Warning>
        <Main>
          <div>{detailedTime}</div>
          <div>{message.match(summaryBrute)}</div>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default CMEUpdateRegexReader;

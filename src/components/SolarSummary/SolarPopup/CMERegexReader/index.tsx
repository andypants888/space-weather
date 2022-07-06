import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Title,
  Main,
  Date,
} from "./CMERegexReader.styles";

const CMERegexReader = (props:any) => {
  const { message, eventTime } = props;
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

  return (
    <Wrapper>
      <Content>
        <Title>New Eruption of Solar Gas & Plasma</Title>
        <Main>
          <div><Date>{detailedTime}</Date></div>
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

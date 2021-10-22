import React from "react";

// Hooks

import { useState } from "react";

// Child Components
import SolarPopup from "./SolarPopup/index.js";

// Styles
import { Content, Wrapper, SolarEvent } from "./SolarSummary.style";

// Event Icons
import IPSIcon from "../../icons/IPS-3.svg";
import ReportIcon from "../../icons/clipboard.png";
import CMEIcon from "../../icons/CME-2.svg";
import RBEIcon from "../../icons/earth.png";

// API Event Object
// messageBody, messageID, messageIssueTime, messageType,messageURL

const SolarSummary = (props) => {
  console.log("SolarSummaryindex.js props: ", props);
  // Props, States, Hooks
  const { messageType, messageIssueTime, messageURL, messageBody } = props.data;
  const [solarPopup, setSolarPopup] = useState(false);

  // Date of Event
  const today = new Date();
  const eventTime = new Date(messageIssueTime);
  const summaryTime = eventTime.toLocaleString("en-US", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });
  const daysAgo = Math.round(
    (today.getTime() - eventTime.getTime()) / (1000 * 3600 * 24)
  );

  // Switch Regex Cases:
  const ipsRegex =
    /(Message Type: Space Weather Notification - Interplanetary Shock)/g;
  const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
  const cmeUpdateRegex = /(CME update)/g;
  const cmeStandardRegex =
    /(Message Type: Space Weather Notification - CME \()/g;
  const rbeStandardRegex =
    /(Message Type: Space Weather Notification - Radiation Belt Enhancement)/g;

  switch (true) {
    case cmeStandardRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              New Coronal Mass Ejection ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {summaryTime}
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    case ipsRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={IPSIcon} alt="Interplanetary Shock Icon" />
              Interplanetary Shock ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {summaryTime}
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    case reportRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={ReportIcon} alt="Report Icon" />
              NASA {messageType}
              <div>
                {`${daysAgo} days ago on `}
                {summaryTime}
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;

    case cmeUpdateRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              CME Update
              <div>
                {`${daysAgo} days ago on `}
                {summaryTime}
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;

    case rbeStandardRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={RBEIcon} alt="Radiation Belt Enhancement Icon" />
              Radiation Belt Enhancement ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {summaryTime}
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    default:
      return null;
  }
};

export default SolarSummary;

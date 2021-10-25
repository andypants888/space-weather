import React from "react";

// Hooks

import { useState } from "react";

// Child Components
import SolarPopup from "./SolarPopup/index.js";

// Styles
import {
  Content,
  Wrapper,
  SolarEvent,
  Icon,
  Title,
  OriginalTime,
  MoreInfo,
} from "./SolarSummary.style";

// Event Icons
import IPSIcon from "../../icons/IPS-3.svg";
import ReportIcon from "../../icons/clipboard.png";
import CMEIcon from "../../icons/CME-2.svg";
import RBEIcon from "../../icons/earth.png";
import UpdateIcon from "../../icons/news-anchor.png";

// API Event Object
// messageBody, messageID, messageIssueTime, messageType,messageURL

const SolarSummary = (props) => {
  console.log("SolarSummaryindex.js props: ", props);
  // Props, States, Hooks
  const { messageType, messageIssueTime, messageURL, messageBody, messageID } = props.data;
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
    // Coronal Mass Ejection
    case cmeStandardRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              </Icon>
              <h3>New Coronal Mass Ejection ({messageType})</h3>
              <h3>
                <div>
                  {`${daysAgo} days ago on `}
                  {summaryTime}
                </div>
              </h3>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              open={solarPopup}
              setOpen={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
              key={messageID}
            />
          </Content>
        </Wrapper>
      );
      break;
    // CME Update
    case cmeUpdateRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={UpdateIcon} alt="Coronal Mass Ejection Icon" />
              </Icon>
              <h3>CME Update</h3>
              <h3>
                <div>
                  {`${daysAgo} days ago on `}
                  {summaryTime}
                </div>
              </h3>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              open={solarPopup}
              setOpen={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    // Interplanetary Shock
    case ipsRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={IPSIcon} alt="Interplanetary Shock Icon" />
              </Icon>
              <h3>Interplanetary Shock ({messageType})</h3>
              <h3>
                <div>
                  {`${daysAgo} days ago on `}
                  {summaryTime}
                </div>
              </h3>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              open={solarPopup}
              setOpen={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    // Report
    case reportRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={ReportIcon} alt="Report" />
              </Icon>
              <h3>NASA Weekly {messageType}</h3>
              <h3>
                <div>
                  {`${daysAgo} days ago on `}
                  {summaryTime}
                </div>
              </h3>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              open={solarPopup}
              setOpen={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={eventTime}
            />
          </Content>
        </Wrapper>
      );
      break;

    // Radiation Belt Enhancement
    case rbeStandardRegex.test(messageBody):
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={RBEIcon} alt="Radiation Belt Enhancement Icon" />
              </Icon>
              <h3>Radiation Belt Enhancement ({messageType})</h3>
              <h3>
                <div>
                  {`${daysAgo} days ago on `}
                  {summaryTime}
                </div>
              </h3>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              open={solarPopup}
              setOpen={setSolarPopup}
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

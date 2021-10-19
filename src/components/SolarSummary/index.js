import React from "react";

// Hooks

import { useState } from "react";

// Child Components
import SolarPopup from "./SolarPopup/index.js";

// Styles
import { Content, Wrapper, SolarEvent } from "./SolarSummary.style";

// Event Icons
import IPSIcon from "../../icons/explosion.png";
import ReportIcon from "../../icons/clipboard.png";
import CMEIcon from "../../icons/nuclear-explosion.png";
import RBEIcon from "../../icons/earth.png";

// API Event Object
// messageBody, messageID, messageIssueTime, messageType,messageURL

const SolarSummary = (props) => {
  console.log("SolarSummaryindex.js props: ", props);
  const { messageType, messageIssueTime, messageURL, messageBody } = props.data;
  const today = new Date();
  const eventTime = new Date(messageIssueTime);
  const easyTime = eventTime.toLocaleString("en-US", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });
  const daysAgo = Math.round(
    (today.getTime() - eventTime.getTime()) / (1000 * 3600 * 24)
  );
  const [solarPopup, setSolarPopup] = useState(false);

  switch (messageType) {
    case "IPS":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={IPSIcon} alt="Interplanetary Shock Icon" />
              Interplanetary Shock ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {easyTime}
              </div>
              <div>
                <a href={`${messageURL}`}>Detailed View</a>
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={messageIssueTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    case "Report":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={ReportIcon} alt="Report Icon" />
              NASA {messageType}
              <div>
                {`${daysAgo} days ago on `}
                {easyTime}
              </div>
              <div>
                <a href={`${messageURL}`}>Detailed View</a>
                </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={messageIssueTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    case "CME":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              Coronal Mass Ejection ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {easyTime}
              </div>
              <div>
                <a href={`${messageURL}`}>Detailed View</a>
              </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>
            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={messageIssueTime}
            />
          </Content>
        </Wrapper>
      );
      break;
    case "RBE":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <img src={RBEIcon} alt="Radiation Belt Enhancement Icon" />
              Radiation Belt Enhancement ({messageType})
              <div>
                {`${daysAgo} days ago on `}
                {easyTime}
              </div>
              <div>
                <a href={`${messageURL}`}>Detailed View</a>
                </div>
              <button onClick={() => setSolarPopup(true)}>More Info</button>
            </SolarEvent>

            <SolarPopup
              trigger={solarPopup}
              setTrigger={setSolarPopup}
              message={messageBody}
              eventType={messageType}
              URL={messageURL}
              eventTime={messageIssueTime}
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

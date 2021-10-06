import React from "react";

// Styles
import { Content, Wrapper, SolarEvent } from "./SolarSummary.style";

// Event Icons
import IPSIcon from "../../images/explosion.png";
import ReportIcon from "../../images/clipboard.png";
import CMEIcon from "../../images/nuclear-explosion.png";
import RBEIcon from "../../images/earth.png";

// API Event Object
// messageBody, messageID, messageIssueTime, messageType,messageURL

const SolarSummary = (props) => {
  console.log("event: ", props);
  const { messageType, messageIssueTime, messageURL } = props.data;
  const today = new Date();
  const eventTime = new Date(messageIssueTime);
  const easyTime = eventTime.toLocaleString("en-US", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });
  const daysAgo = Math.round((today.getTime() - eventTime.getTime()) / (1000 * 3600 * 24))

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
            </SolarEvent>
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
            </SolarEvent>
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
            </SolarEvent>
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
            </SolarEvent>
          </Content>
        </Wrapper>
      );
      break;
    default:
      return null;
  }
};

export default SolarSummary;

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
} from "./SolarSummary.styles";

// Event Icons
import IPSIcon from "../../icons/IPS-3.svg";
import ReportIcon from "../../icons/clipboard.png";
import CMEIcon from "../../icons/CME-2.svg";
import RBEIcon from "../../icons/earth.png";
import UpdateIcon from "../../icons/monitoring.png";
import SEPIcon from "../../icons/lightning-bolt.png";
import GSTIcon from "../../icons/northern-lights.png";
import MPCIcon from "../../icons/gap.png";
import FLRIcon from "../../icons/flare.png";

// API Event Object
// messageBody, messageID, messageIssueTime, messageType,messageURL

const SolarSummary = (props) => {
  // Show each array object
  // console.log("SolarSummaryindex.js props: ", props);
  // Props, States, Hooks
  const { messageType, messageIssueTime, messageURL, messageBody, messageID } =
    props.data;
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
  const cmeUpdateRegex = /(## Summary:\n\nBETA PRODUCT\.)|(## Summary:\n\nUpdate)/g;
  const cmeStandardRegex =
    /(## Summary:\n\n\w-type CME\s)|(## Summary:\n\nMultiple\s)/g;

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
    case messageType === "IPS":
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
    case messageType === "Report":
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
    case messageType === "RBE":
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
    // SEP Solar Energetic Particles
    case messageType === "SEP":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={SEPIcon} alt="Solar Energetic Particles Icon" />
              </Icon>
              <h3>Solar Energetic Particles ({messageType})</h3>
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
    // GST Geomagnetic Storm
    case messageType === "GST":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={GSTIcon} alt="Geomagnetic Storm Icon" />
              </Icon>
              <h3>Geomagnetic Storm ({messageType})</h3>
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
    // MPC Magnetopause Crossing
    case messageType === "MPC":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={MPCIcon} alt="Magnetopause Crossing Icon" />
              </Icon>
              <h3>Magnetopause Crossing ({messageType})</h3>
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
    // FLR Solar Flare
    case messageType === "FLR":
      return (
        <Wrapper>
          <Content>
            <SolarEvent>
              <Icon>
                <img src={FLRIcon} alt="Solar Flare Icon" />
              </Icon>
              <h3>New Solar Flare ({messageType})</h3>
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
      // HSS High Speed Stream
    default:
      return null;
  }
};

export default SolarSummary;

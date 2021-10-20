import React from "react";

// Style
import { Content, Wrapper } from "./SolarPopup.style";

// Event Icons
import IPSIcon from "../../../icons/IPS-3.svg";
import ReportIcon from "../../../icons/clipboard.png";
import CMEIcon from "../../../icons/CME-2.svg";
import RBEIcon from "../../../icons/earth.png";

const SolarPopup = (props) => {
  let regex = /^(## Summary:\n\n).*(\n\n\n)/gms;

  switch (props.eventType) {
    case "IPS":
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`Interplanetary Shock (${props.eventType})`}</h2>
            <img src={IPSIcon} alt="Interplanetary Shock Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            <div>{props.message.match(regex)}</div>
            <br />
            <div>
              <a href={`${props.URL}`}>Detailed View</a>
            </div>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );

    case "CME":
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <div>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              {`Coronal Mass Ejection (${props.eventType})`}
            </div>
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            <iframe
              src="https://giphy.com/embed/mtRLckxvlwtStCZWd8"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8">
                via GIPHY
              </a>
            </p>
            <br />
            <div>{props.message.match(regex)}</div>
            <br />
            <div>
              <a href={`${props.URL}`}>Detailed View</a>
            </div>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );

    case "Report":
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`NASA Weekly ${props.eventType}`}</h2>
            <img src={ReportIcon} alt="Report Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            <div>{props.message.match(regex)}</div>
            <br />
            <div>
              <a href={`${props.URL}`}>Detailed View</a>
            </div>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );

    case "RBE":
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`Radiation Belt Enhancement (${props.eventType})`}</h2>
            <img src={RBEIcon} alt="Radiation Belt Enhancement Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            <div>{props.message.match(regex)}</div>
            <br />
            <div>
              <a href={`${props.URL}`}>Detailed View</a>
            </div>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );

    default:
      return null;
  }
};

export default SolarPopup;

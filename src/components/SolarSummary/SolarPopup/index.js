import React from "react";

// Child Components
import RegexReader from "./RegexReader";

// Style
import {
  Content,
  Wrapper,
  Dimmer,
  CloseBanner,
  Header,
  GifContainer,
  TextContainer,
  LearnMore,
  Footer,
  OneLiner,
} from "./SolarPopup.style";

// Event Icons
import IPSIcon from "../../../icons/IPS-3.svg";
import ReportIcon from "../../../icons/clipboard.png";
import CMEIcon from "../../../icons/CME-2.svg";
import RBEIcon from "../../../icons/earth.png";

const SolarPopup = (props) => {
  const regex = /^(## Summary:\n\n).*(\n\n\n)/gms;

  const { trigger, setTrigger, message, eventType, URL, eventTime } = props;

  // Switch Regex Cases
  const ipsRegex =
    /(Message Type: Space Weather Notification - Interplanetary Shock)/g;
  const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
  const cmeUpdateRegex = /(CME update)/g;
  const cmeStandardRegex = /(Message Type: Space Weather Notification - CME \()/g;
  const rbeStandardRegex = /(Message Type: Space Weather Notification - Radiation Belt Enhancement)/g;

  switch (true) {
    case cmeStandardRegex.test(message):
      return trigger ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setTrigger(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              <div>{`Coronal Mass Ejection (${eventType})`}</div>
            </Header>
            <OneLiner>
              <div>Plasma & Gas Eruption from Sun's Atmosphere</div>
              <div>(Corona)</div>
            </OneLiner>
            {/* <div>{`${eventTime} + ${eventType} + ${URL} +`}</div> */}
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/mtRLckxvlwtStCZWd8"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8"></a>
              {/* <div>gif from European Space Agency</div> */}
            </GifContainer>
            <br />
            <TextContainer>
              {/* {message.match(regex)} */}
              <RegexReader message={message} eventType={eventType} />
            </TextContainer>
            <br />
            <LearnMore>
              <div>What is a Coronal Mass Ejection?</div>
              <button>Help Article</button>
              <button>Video Explains</button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a href={``}>Longer Article</a>
              <a href={``}>Longer Video</a>
            </Footer>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );

    case ipsRegex.test(message):
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`Interplanetary Shock (${props.eventType})`}</h2>
            <img src={IPSIcon} alt="Interplanetary Shock Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            {/* <div>{props.message.match(regex)}</div> */}
            Insert Regex Here
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

    case reportRegex.test(message):
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`NASA Weekly ${props.eventType}`}</h2>
            <img src={ReportIcon} alt="Report Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            {/* <div>{props.message.match(regex)}</div> */}
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

    case rbeStandardRegex.test(message):
      return props.trigger ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setTrigger(false)}>Less Info</button>
            <h2>{`Radiation Belt Enhancement (${props.eventType})`}</h2>
            <img src={RBEIcon} alt="Radiation Belt Enhancement Icon" />
            {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
            <br />
            {/* <div>{props.message.match(regex)}</div> */}
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

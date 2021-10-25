import React, { useEffect } from "react";

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
  // Unused Code
  // const regex = /^(## Summary:\n\n).*(\n\n\n)/gms;

  // Props & Destructure
  const { open, setOpen, message, eventType, URL, eventTime, messageID } = props;

  // Hooks
  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = '');
  });

  // Switch Regex Cases
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
    case cmeStandardRegex.test(message):
      return open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={CMEIcon} alt="Coronal Mass Ejection Icon" />
              <div>{`Coronal Mass Ejection (${eventType})`}</div>
            </Header>
            <OneLiner>
              <div>Plasma & Gas Eruption from Sun's Atmosphere</div>
              <div>(Corona)</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/mtRLckxvlwtStCZWd8"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8"></a>
              {/* <div>2012 CME Event</div> */}
            </GifContainer>
            <br />
            <TextContainer>
              {/* {message.match(regex)} */}
              <RegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
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
    // Interplanetary Shock
    case ipsRegex.test(message):
      return open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={IPSIcon} alt="Interplanetary Shock" />
              <div>{`Interplanetary Shock (${eventType})`}</div>
            </Header>
            <OneLiner>
              <div>Under Construction</div>
            </OneLiner>
            <br />
            <GifContainer>
              {/* <iframe
                src="https://giphy.com/embed/mtRLckxvlwtStCZWd8"
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8"></a>
              {/* <div>2012 CME Event</div> */}
            </GifContainer>
            <br />
            <TextContainer>
              {/* {message.match(regex)} */}
              {/* <RegexReader message={message} eventType={eventType} eventTime={eventTime}/> */}
            </TextContainer>
            <br />
            <LearnMore>
              {/* <div>What is a Coronal Mass Ejection?</div> */}
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

    case reportRegex.test(message):
      return props.open ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setOpen(false)}>Less Info</button>
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
      return props.open ? (
        <Wrapper>
          <Content>
            <button onClick={() => props.setOpen(false)}>Less Info</button>
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

import React, { useEffect } from "react";

// Child Components
import CMERegexReader from "./CMERegexReader";
import CMEUpdateRegexReader from "./CMEUpdateRegexReader";
import IPSRegexReader from "./IPSRegexReader";
import ReportRegexReader from "./ReportRegexReader";

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
import UpdateIcon from "../../../icons/news-anchor.png";
import SEPIcon from "../../../icons/lightning-bolt.png";
import FLRIcon from "../../../icons/flare.png";
import GSTIcon from "../../../icons/northern-lights.png";
import MPCIcon from "../../../icons/gap.png";

const SolarPopup = (props) => {
  // Props & Destructure
  const { open, setOpen, message, eventType, URL, eventTime, messageID } =
    props;

  // Hooks
  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "");
  });

  // Switch Regex Cases
  const ipsRegex =
    /(Message Type: Space Weather Notification - Interplanetary Shock)/g;
  const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
  const cmeUpdateRegex = /(CME update)/g;
  const cmeStandardRegex = /Message Type: Space Weather Notification - CME/g;
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
              <div>Plasma & Gas Eruption from Sun's Corona (Atmosphere)</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/mtRLckxvlwtStCZWd8"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8"></a>
              (Image is an example, not same event)
            </GifContainer>
            <br />
            <TextContainer>
              {/* {message.match(regex)} */}
              <CMERegexReader
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
    // CME Update
    case cmeUpdateRegex.test(message):
      return open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={UpdateIcon} alt="News Icon" />
              <div>{`${eventType} Update`}</div>
            </Header>
            <OneLiner>
              <div>Updated Analysis of Previous CME Event</div>
            </OneLiner>
            <br />
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/gbRLaGDygGpkgdaLjA"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/europeanspaceagency-esa-european-space-agency-esagif-gbRLaGDygGpkgdaLjA">
                  {" "}
                </a>
                (Image is an example, not same event)
              </p>
              {/* <div>2012 CME Event</div> */}
            </GifContainer>
            <br />
            <TextContainer>
              {/* {message.match(regex)} */}
              <CMEUpdateRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <div>What is a CME Analysis?</div>
              <button>Help Article</button>
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
              <div>
                Electromagnetic Shockwaves from the Sun hit the Earth's Magnetic
                Field!
              </div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/nFrkObrecjIGapisw5"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Image is an example, not same event)
            </GifContainer>
            <br />
            <TextContainer>
              <IPSRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
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
    // Weekly Report
    case reportRegex.test(message):
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={ReportIcon} alt="Weekly Report" />
              <div>{`Weekly Report`}</div>
            </Header>
            <OneLiner>
              <div>Space Weather Summary and Next Week's Forecast!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/vS573qTiGzVWDppUMJ"
                // width="480"
                // height="270"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Astronaut on ISS)
            </GifContainer>
            <br />
            <TextContainer>
              <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
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
    // Radiation Belt Enhancement RBE
    case eventType === "RBE":
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={RBEIcon} alt="Radiation Belt Enhancement" />
              <div>{`Radiation Belt Enhancement (RBE)`}</div>
            </Header>
            <OneLiner>
              <div>Increased Radiation around Earth!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/UbUUWf4pzLDmeZOn9E"
                // width="480"
                // height="270"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Extra radiation trapped in "Van Allen Belts" around earth.)
            </GifContainer>
            <br />
            <TextContainer>
              {/* <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              /> */}
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

    // Solar Energetic Particles
    case eventType === "SEP":
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={SEPIcon} alt="Solar Energetic Particles" />
              <div>{`Solar Energetic Particles (SEP)`}</div>
            </Header>
            <OneLiner>
              <div>High-Powered Particle Storm from the Sun!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/1oMi442QfTrBU0VyOK"
                // width="480"
                // height="270"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Simulation of Solar Energetic Particles (SEP) & Coronal Mass
              Ejection (CME))
            </GifContainer>
            <br />
            <TextContainer>
              {/* <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              /> */}
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

    // Solar Flare FLR
    case eventType === "FLR":
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={FLRIcon} alt="Solar Flare" />
              <div>{`Solar Flare (FLR)`}</div>
            </Header>
            <OneLiner>
              <div>Bright Flash of X-Rays & Gamma-Rays (High-Energy Light)</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/3o7TKGMEexYBEhuoGk"
                // width="480"
                // height="253"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Flare is from previous event)
            </GifContainer>
            <br />
            <TextContainer>
              {/* <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              /> */}
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

    // Geomagnetic Storm GST
    case eventType === "GST":
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={GSTIcon} alt="Geomagnetic Storm" />
              <div>{`Geomagnetic Storm (GST)`}</div>
            </Header>
            <OneLiner>
              <div>Several types of Radiation reach Earth!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/35NGT2lm6mfHlNAkMu"
                // width="480"
                // height="270"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Geomagnetic storms may damage orbiting satellites & make pretty
              lights)
            </GifContainer>
            <br />
            <TextContainer>
              {/* <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              /> */}
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

    // Magnetopause Crossing MPC
    case eventType === "MPC":
      return props.open ? (
        <Wrapper>
          <Dimmer />
          <Content>
            <CloseBanner>
              <button onClick={() => setOpen(false)}>X</button>
            </CloseBanner>
            <Header>
              <img src={MPCIcon} alt="Magnetopause Crossing" />
              <div>{`Magnetopause Crossing (MPC)`}</div>
            </Header>
            <OneLiner>
              <div>Radioactive solar particles cross Earth's Shield!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/6YuuiPRwxjFsiV5ZxW"
                // width="480"
                // height="270"
                frameBorder="0"
                // class="giphy-embed"
                allowFullScreen
              ></iframe>
              (Earth's magnetosphere & magnetopause normally block solar wind,
              but NOT always!)
            </GifContainer>
            <br />
            <TextContainer>
              {/* <ReportRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              /> */}
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
    default:
      return null;
  }
};

export default SolarPopup;

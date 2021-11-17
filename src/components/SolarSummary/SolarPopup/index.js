import React, { useEffect } from "react";

// Child Components
import CMERegexReader from "./CMERegexReader";
import CMEUpdateRegexReader from "./CMEUpdateRegexReader";
import IPSRegexReader from "./IPSRegexReader";
import ReportRegexReader from "./ReportRegexReader";
import GSTRegexReader from "./GSTRegexReader";
import RBERegexReader from "./RBERegexReader";
import MPCRegexReader from "./MPCRegexReader";
import SEPRegexReader from "./SEPRegexReader";
import FLRRegexReader from "./FLRRegexReader";

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
  const cmeUpdateRegex =
    /(## Summary:\n\nBETA PRODUCT\.)|(## Summary:\n\nUpdate)/g;
  const cmeStandardRegex =
    /(## Summary:\n\n\w-type CME\s)|(## Summary:\n\nMultiple\s)/g;

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
                title="giphy embed"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://giphy.com/gifs/europeanspaceagency-sun-european-space-agency-soho-mtRLckxvlwtStCZWd8"></a>
              (Image is an example, not same event)
            </GifContainer>
            <br />
            <TextContainer>
              <CMERegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=HWhu6oUL9O8")
                }
              >
                What is a Coronal Mass Ejection? (Video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://scied.ucar.edu/learning-zone/sun-space-weather/coronal-mass-ejection"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://www.swpc.noaa.gov/phenomena/coronal-mass-ejections`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=oxkFk7_EDVg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
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
                title="giphy embed"
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
              <CMEUpdateRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=P-FJizyePYQ")
                }
              >
                What is a CME analysis? (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://northernlightsnow.com/2015/01/24/how-to-read-the-wsa-enlil-model-output/"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://www.spaceweatherlive.com/en/solar-activity/wsa-enlil.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=QAs73yvZ7eY`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
            </Footer>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );
    // Interplanetary Shock
    case eventType === "IPS":
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
                title="giphy embed"
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
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=GmtPZga7DZM&t=77s"
                  )
                }
              >
                Strong IPS detected by NASA (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.nasa.gov/feature/goddard/2019/nasa-s-mms-finds-first-interplanetary-shock"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://www.frontiersin.org/articles/10.3389/fphy.2020.626768/full`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=rVjaAKFGHqw&t=30s`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
            </Footer>
            <br />
          </Content>
        </Wrapper>
      ) : (
        ""
      );
    // Weekly Report
    case eventType === "Report":
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
                title="giphy embed"
                // width="480"
                // height="270"
                frameBorder="0"
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
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=lfnst1W33OI")
                }
              >
                Why is NASA studying the sun? (video)
              </button>
              <button
                onClick={() =>
                  window.open("https://science.nasa.gov/heliophysics")
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://www.nasa.gov/mission_pages/sunearth/missions/index.html`}
              >
                Advanced Article
              </a>
              <a href={`https://www.youtube.com/watch?v=6L0ITrRZi74`}>
                Advanced Video
              </a>
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
                title="giphy embed"
                // width="480"
                // height="270"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Extra radiation trapped in "Van Allen Belts" around earth.)
            </GifContainer>
            <br />
            <TextContainer>
              <RBERegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=XKCMaJBXmzY")
                }
              >
                Where are the radiation-trapping Van Allen Belts? (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://spacecenter.org/what-are-the-van-allen-radiation-belts/"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://science.thewire.in/the-sciences/apollo-11-van-allen-radiation-belts-translunar-injection/`}
              >
                Advanced Article
              </a>
              <a href={`https://www.youtube.com/watch?v=h9YN50xXFJY`}>
                Advanced Video
              </a>
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
                title="giphy embed"
                // width="480"
                // height="270"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Simulation of Solar Energetic Particles (SEP) & Coronal Mass
              Ejection (CME))
            </GifContainer>
            <br />
            <TextContainer>
              <SEPRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=twB62NYsaIg")
                }
              >
                How does Solar Energetic Particles (Solar Wind) affect Earth?
                (video)
              </button>
              <button
                onClick={() => window.open("https://svs.gsfc.nasa.gov/20320")}
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://www.nasa.gov/feature/goddard/2021/in-first-scientists-trace-fastest-solar-particles-to-their-roots-on-the-sun`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=__rkQr_UhuA&t=187s`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
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
                src="https://giphy.com/embed/BK5jP59AWUUqLauDlF"
                title="giphy embed"
                // width="480"
                // height="400"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Flares are a form of light, not traditional particles)
            </GifContainer>
            <br />
            <TextContainer>
              <FLRRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=oOXVZo7KikE")
                }
              >
                What is a CME analsis? (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.esa.int/Science_Exploration/Space_Science/What_are_solar_flares"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`https://hesperia.gsfc.nasa.gov/sftheory/flare.htm`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=TWjtYSRlOUI`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
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
              <div>Radioactive Solar Wind reaches Earth!</div>
            </OneLiner>
            <br />
            <GifContainer>
              <iframe
                src="https://giphy.com/embed/35NGT2lm6mfHlNAkMu"
                title="giphy embed"
                // width="480"
                // height="270"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Geomagnetic storms may damage orbiting electronics & make pretty
              lights)
            </GifContainer>
            <br />
            <TextContainer>
              <GSTRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=HJfy8acFaOg")
                }
              >
                What causes a Geomagnetic/Solar Storm? (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.britannica.com/science/geomagnetic-storm"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`http://www.northernlighthouse.ca/geomagnetic-storms/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=mEqE-g128kk`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
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
                title="giphy embed"
                // width="480"
                // height="270"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              (Earth's magnetosphere & magnetopause normally block solar wind,
              but NOT always!)
            </GifContainer>
            <br />
            <TextContainer>
              <MPCRegexReader
                message={message}
                eventType={eventType}
                eventTime={eventTime}
                key={messageID}
              />
            </TextContainer>
            <br />
            <LearnMore>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=URN-XyZD2vQ")
                }
              >
                How does the magnetosphere normally protect Earth? (video)
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://climate.nasa.gov/news/3105/earths-magnetosphere-protecting-our-planet-from-harmful-space-energy/"
                  )
                }
              >
                Help Article
              </button>
            </LearnMore>
            <br />
            <Footer>
              <a href={`${URL}`}>Event Details</a>
              <a
                href={`http://eng.sepc.ac.cn/Introduction.php`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Article
              </a>
              <a
                href={`https://www.youtube.com/watch?v=cLLq6plMjU0`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Video
              </a>
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

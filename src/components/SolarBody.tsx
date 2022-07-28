import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";
import SunIcon from "../icons/sun.png";
import SpeedIcon from "../icons/speedometer.png";
import NoneIcon from "../icons/accept.png";
import MinorIcon from "../icons/blue-warning.png";
import StrongIcon from "../icons/purple-alert.png";

// Styles
import {
  Wrapper,
  Content,
  DailyItems,
  DailyWrapper,
  DailyA,
  DailyB,
  DailyC,
  DailyD,
  ItemTitle,
  ItemWrapperA,
  ItemWrapperBCD,
  SolarEvents,
  EventsWrapper,
} from "./SolarBody.styles";

const SolarBody = () => {
  // Set Solar Notifications
  const [solarData, setSolarData] = useState<any[]>([]);

  useEffect(() => {
    fetchSolarData();
  }, []);

  const fetchSolarData = () => {
    const endpoint = `https://space-weather-heroku.herokuapp.com/weather`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(`api array test: `, data);
        return setSolarData(data);
      })
      .catch((err) => console.log(err));
  };

  if (!solarData) {
    return null;
  }
  return (
    <Wrapper>
      <Content>
        <DailyWrapper>
          <h4>Today's Sun</h4>
          <DailyItems>
            <DailyA>
              <ItemWrapperA>
                <ItemTitle>Data from:</ItemTitle>
                <img src={SunIcon} alt="sun icon" />
                <h3>2 hours ago</h3>
              </ItemWrapperA>
              <ItemWrapperA>
                <ItemTitle>
                  Solar Wind <br />
                  Speed:
                </ItemTitle>
                <img src={SpeedIcon} alt="speed icon" />
                <h3>
                  Moderate: <br />
                  423 km/sec
                </h3>
              </ItemWrapperA>
              <ItemWrapperA>
                <ItemTitle>
                  Solar <br />
                  Instability:
                </ItemTitle>
                <h1>86</h1>
                <h3>
                  solar flux <br />
                  units
                </h3>
              </ItemWrapperA>
            </DailyA>
            <DailyB>
              <ItemWrapperBCD>
                <ItemTitle>Magnetic Storm Risk:</ItemTitle>
                <img src={NoneIcon} alt="none icon" />
                <h3>None</h3>
              </ItemWrapperBCD>
            </DailyB>
            <DailyC>
              <ItemWrapperBCD>
                <ItemTitle>Radio Blackout Risk:</ItemTitle>
                <img src={MinorIcon} alt="minor icon" />
                <h3>Minor</h3>
              </ItemWrapperBCD>
            </DailyC>
            <DailyD>
              <ItemWrapperBCD>
                <ItemTitle>Solar Radiation Risk:</ItemTitle>
                <img src={StrongIcon} alt="strong icon" />
                <h3>Minor</h3>
              </ItemWrapperBCD>
            </DailyD>
          </DailyItems>
        </DailyWrapper>
        <EventsWrapper>
          <h4>Recent Events</h4>
          <SolarEvents>
            {solarData?.map((event) => (
              <SolarSummary key={event.messageID} data={event} />
            ))}
          </SolarEvents>
        </EventsWrapper>
      </Content>
    </Wrapper>
  );
};

export default SolarBody;

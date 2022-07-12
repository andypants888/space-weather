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
          <h2>The Sun's Daily Weather</h2>
          <DailyItems>
            <DailyA>
              <ItemWrapperA>
                <p>Activeness</p>
                <img src={SunIcon} alt="sun icon" />
                <p>Solar wind released today:</p>
              </ItemWrapperA>
              <ItemWrapperA>
                <p>Status</p>
                <img src={SpeedIcon} alt="speed icon" />
                <p>Very Active</p>
              </ItemWrapperA>
              <ItemWrapperA>
                <p>Solar Flux</p>
                <h1>86 sfu</h1>
                <p>Monthly avg: 36 sfu</p>
              </ItemWrapperA>
            </DailyA>
            <DailyB>
              <ItemWrapperBCD>
                <p>Magnetic Storm Risk</p>
                <img src={NoneIcon} alt="none icon" />
                <p>None</p>
              </ItemWrapperBCD>
            </DailyB>
            <DailyC>
              <ItemWrapperBCD>
                <p>Radio Blackout Risk</p>
                <img src={MinorIcon} alt="minor icon" />
                <p>Minor</p>
              </ItemWrapperBCD>
            </DailyC>
            <DailyD>
              <ItemWrapperBCD>
                <p>Solar Radiation Risk</p>
                <img src={StrongIcon} alt="strong icon" />
                <p>Minor</p>
              </ItemWrapperBCD>
            </DailyD>
          </DailyItems>
        </DailyWrapper>
        <EventsWrapper>
          <h2>Recent Events</h2>
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

import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";
import SatelliteIcon from "../icons/orbit.png";
import DynamicRiskIcon from "./DynamicRiskIcon";
import DynamicSpeedIcon from "./DynamicSpeedIcon";

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

type dailyFlux = {
  current_geomag_storm: string;
  current_radio_blackout: string;
  current_solar_radiation: string;
  predict_day1_geomag_storm: string;
  predict_day1_major_radio_blackout: number;
  predict_day1_minor_radio_blackout: number;
  predict_day1_solar_storm: number;
  predict_day2_geomag_storm: string;
  predict_day2_major_radio_blackout: number;
  predict_day2_minor_radio_blackout: number;
  predict_day2_solar_storm: number;
  predict_day3_geomag_storm: string;
  predict_day3_major_radio_blackout: number;
  predict_day3_minor_radio_blackout: number;
  predict_day3_solar_storm: number;
  radio_flux: number;
  scrape_time: string;
  solar_mag_field_1: number;
  solar_mag_field_2: number;
  solar_wind_speed: number;
  yester_max_geomag_storm: string;
  yester_max_radio_blackout: string;
  yester_max_solar_radiation: string;
  _id: string;
};

const SolarBody = () => {
  // Set Solar Notifications
  const [eventsData, setEventsData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<dailyFlux>();

  useEffect(() => {
    fetchEventsData();
    fetchDailyData();
  }, []);

  let minAgoScrape;
  let displayTime;
  // Date of Event
  if (typeof dailyData?.scrape_time === "string") {
    const today = new Date();
    const eventTime = new Date(dailyData?.scrape_time);
    displayTime = eventTime.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    minAgoScrape = Math.round(
      (today.getTime() - eventTime.getTime()) / (1000 * 60)
    );
  }

  const fetchEventsData = () => {
    const endpoint = `https://space-weather-heroku.herokuapp.com/weather`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Events test: `, data);
        return setEventsData(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchDailyData = () => {
    const endpoint = `https://space-weather-heroku.herokuapp.com/flux`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Daily Flux test: `, data[0]);
        return setDailyData(data[0]);
      })
      .catch((err) => console.log(err));
  };

  if (!eventsData) {
    return null;
  } else if (!dailyData) {
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
                <img src={SatelliteIcon} alt="sun icon" />
                <h3>{minAgoScrape} min ago</h3>
                <h3>{displayTime}</h3>
              </ItemWrapperA>
              <ItemWrapperA>
                <ItemTitle>
                  Solar Wind <br />
                  Speed:
                </ItemTitle>
                {/* <img src={Speed2Icon} alt="speed icon" /> */}
                <DynamicSpeedIcon windSpeed={dailyData.solar_wind_speed} />
                <h3>
                  {/* Moderate: <br /> */}
                  {dailyData.solar_wind_speed} km/sec
                </h3>
              </ItemWrapperA>
              <ItemWrapperA>
                <ItemTitle>
                  Solar <br />
                  Instability:
                </ItemTitle>
                <h1>{dailyData.radio_flux}</h1>
                <h3>
                  solar flux <br />
                  units
                </h3>
              </ItemWrapperA>
            </DailyA>
            <DailyB>
              <ItemWrapperBCD>
                <ItemTitle>Magnetic Storm Risk:</ItemTitle>
                <DynamicRiskIcon riskLevel={dailyData.current_geomag_storm} />
                <h3>{dailyData.current_geomag_storm.toUpperCase()}</h3>
              </ItemWrapperBCD>
            </DailyB>
            <DailyC>
              <ItemWrapperBCD>
                <ItemTitle>Radio Blackout Risk:</ItemTitle>
                <DynamicRiskIcon riskLevel={dailyData.current_radio_blackout} />
                {/* <img src={MinorIcon} alt="minor icon" /> */}
                <h3>{dailyData.current_radio_blackout.toUpperCase()}</h3>
              </ItemWrapperBCD>
            </DailyC>
            <DailyD>
              <ItemWrapperBCD>
                <ItemTitle>Solar Radiation Risk:</ItemTitle>
                <DynamicRiskIcon
                  riskLevel={dailyData.current_solar_radiation}
                />
                <h3>{dailyData.current_solar_radiation.toUpperCase()}</h3>
              </ItemWrapperBCD>
            </DailyD>
          </DailyItems>
        </DailyWrapper>
        <EventsWrapper>
          <h4>Recent Events</h4>
          <SolarEvents>
            {eventsData?.map((event) => (
              <SolarSummary key={event.messageID} data={event} />
            ))}
          </SolarEvents>
        </EventsWrapper>
      </Content>
    </Wrapper>
  );
};

export default SolarBody;

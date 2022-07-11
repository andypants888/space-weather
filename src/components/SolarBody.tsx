import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";

// Styles
import { Wrapper, Content, SolarEvents } from "./SolarBody.styles";

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
        <h2>Daily Weather</h2>
        <h2>Solar Weather Events</h2>
        <SolarEvents>
          {solarData?.map((event) => (
            <SolarSummary key={event.messageID} data={event} />
          ))}
        </SolarEvents>
      </Content>
    </Wrapper>
  );
};

export default SolarBody;

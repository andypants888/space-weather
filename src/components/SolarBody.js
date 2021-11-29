import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";

// Styles
import { Wrapper, Content } from "./SolarBody.styles";

const SolarBody = () => {
  // Set Solar Notifications
  const [solarData, setSolarData] = useState();

  useEffect(() => {
    fetchSolarData();
  }, []);

  const fetchSolarData = () => {
    const endpoint = `http://spaceweather2-env.eba-cwj23cun.us-east-2.elasticbeanstalk.com/weather`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(`api array test: `, data);
        return setSolarData(data);
      });
  };

  if (!solarData) {
    return "solarData not loaded yet";
  }
  return (
    <Wrapper>
      <Content>
        <h2>Solar Weather Events</h2>
        {solarData.map((event) => (
          <SolarSummary key={event.messageID} data={event} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default SolarBody;

import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";

// Styles
import { Wrapper, Content } from "./SolarBody.styles";

const SolarBody = () => {
  // Store Solar Notifications
  const [solarData, setSolarData] = useState();

  useEffect(() => {
    fetchSolarData();
  }, []);

  const fetchSolarData = () => {
    const API_KEY = "IltOH3vL9ODoatveN6ZaNL7RFPlvjTGyp6Z6kTT9";
    const today = new Date().toISOString();
    const endpoint = `https://api.nasa.gov/DONKI/notifications?startDate=YYYY-MM-DD&endDate=${today}&type=all&api_key=${API_KEY}`;

    // End Date == Today!
    // Testing Historical Events

    // const testEndDate = "2021-7-17";
    // const testStartDate = "2021-6-5";
    // const testEndpoint = `https://api.nasa.gov/DONKI/notifications?startDate=${testStartDate}&endDate=${testEndDate}&type=all&api_key=${API_KEY}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        // console.log("testEndDate: ", testDate);
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

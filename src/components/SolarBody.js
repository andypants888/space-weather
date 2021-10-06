import React from "react";
import SolarSummary from "./SolarSummary";
import { useState, useEffect } from "react";

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

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(`api array test: `, data);
        return setSolarData(data);
      });
  };

  if (!solarData) {
    return 'solarData didnt load'
  }
  return (
    <>
      <h1>Solar Events</h1>
      {solarData.map(event => (
        <SolarSummary key={event.messageID} data={event} />
      ))}
    </>
  );
};

export default SolarBody;

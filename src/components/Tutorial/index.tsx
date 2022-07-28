import React from "react";

// Styles
import { Wrapper, Content, Title, Card } from "./Tutorial.styles";

// Routing
import { NavLink } from "react-router-dom";

// Card Images
import FlareImage from "../../images/flare-web.gif";
import AuroraImage from "../../images/nasa-northern-lights.jpg";
import SohoImage from "../../images/soho-nasa-esa.jpg";
import OrbitImage from "../../images/orbits.jpg";
import SupernovaImage from "../../images/supernova.jpg";
import SunImage from "../../images/observe-sun.jpg";
import BigBangImage from "../../images/big-bang.jpg";
import CosmicRaysImage from "../../images/cosmic-rays.jpg";
import GeorgesImage from "../../images/georges.jpg";

declare global {
  interface Window {
      survey:any;
  }
}

// let survey = window.survey; 
// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window

const Tutorial = () => {
  return (
    <Wrapper>
      <Title>📚 Tutorial 📚</Title>
      <Content>
        <NavLink to="lesson01">
          <Card>
            1. What is Space Weather?
            <img src={FlareImage} alt="flare" />
          </Card>
        </NavLink>
        <NavLink to="lesson02">
          <Card>
            2. How does the earth's aurora's happen?
            <img src={AuroraImage} alt="aurora" />
          </Card>
        </NavLink>
        <NavLink to="lesson03">
          <Card>
            3. How do scientists keep track of solar events?
            <img src={SohoImage} alt="satellite" />
          </Card>
        </NavLink>
      </Content>
      <Title>🪙 Bonus 🪙</Title>
      <Content>
        <NavLink to="bonus01">
          <Card>
            1. Why is the Sun so hot?
            <img src={SunImage} alt="sun" />
          </Card>
        </NavLink>
        <NavLink to="bonus02">
          <Card>
            2. How can stars make Gold?
            <img src={SupernovaImage} alt="supernova" />
          </Card>
        </NavLink>
        <NavLink to="bonus03">
          <Card>
            3. Can I play with Orbits?
            <img src={OrbitImage} alt="orbits" />
          </Card>
        </NavLink>
      </Content>
      <Title>💫 Big Bang 💫</Title>
      <Content>
        <NavLink to="bigbang01">
          <Card>
            1. What really happened in the Big Bang? <img src={BigBangImage} alt="big bang diagram" />
          </Card>
        </NavLink>
        <NavLink to="bigbang02">
        <Card>
          2. What are cosmic rays? <img src={CosmicRaysImage} alt="cosmic rays" />
        </Card>
        </NavLink>
        <NavLink to="bigbang03">
        <Card>
          3. Is the Big Bang really true?{" "}
          <img src={GeorgesImage} alt="george lemaitre" />
        </Card>
        </NavLink>
      </Content>
    </Wrapper>
  );
};

export default Tutorial;

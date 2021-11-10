import React from "react";

// Styles
import { Wrapper, Content, Title, Card } from "./Tutorial.styles";

// Routing
import { NavLink } from "react-router-dom";

// Card Images
import FlareImage from "../../images/flare-web.gif";
import AuroraImage from "../../images/nasa-northern-lights.jpg";
import SohoImage from "../../images/soho-nasa-esa.jpg";
import ConstructImage from "../../images/construction.jpg";
import OrbitImage from "../../images/orbits.jpg"
import SupernovaImage from "../../images/supernova.jpg"
import SunImage from "../../images/observe-sun.jpg";

const Tutorial = () => {
  // console.log('tutorial running')
  return (
    <Wrapper>
      <Title>Tutorial</Title>
      <Content>
        <NavLink to="lesson01">
          <Card>
            1. What is Space Weather?
            <img src={FlareImage} />
          </Card>
        </NavLink>
        <NavLink to="lesson02">
          <Card>
            2. How does the earth's aurora's happen?
            <img src={AuroraImage} />
          </Card>
        </NavLink>
        <NavLink to="lesson03">
          <Card>
            3. How do scientists keep track of solar events?
            <img src={SohoImage} />
          </Card>
        </NavLink>
      </Content>
      <Title>Bonus (under construction 👷)</Title>
      <Content>
        <Card>
          1. How does the Sun make its energy?
          <img src={SunImage} />
        </Card>
        <Card>
          2. How can stars make Gold?
          <img src={SupernovaImage} />
        </Card>
        <Card>
          3. Can I play with Orbits?
          <img src={OrbitImage} />
        </Card>
      </Content>
      <Title>Big Bang 👷</Title>
      <Content>
        <Card>
          1. What really happened in the Big Bang? <img src={ConstructImage} />
        </Card>
        <Card>
          2. What are cosmic rays? <img src={ConstructImage} />
        </Card>
        <Card>
          3. How do we know the Big Bang is real or fake?{" "}
          <img src={ConstructImage} />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default Tutorial;

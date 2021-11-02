import React from "react";

import RedSun from "../../background/sun-red-nasa.jpg";

import { Wrapper, Content, Title } from "./Landing.styles.js";

const Landing = () => {
  return (
    <Wrapper>
      <Content>
          <Title>
              <h4>learn, understand & research:</h4>
              <h1>Space Weather</h1>
          </Title>
          <img src={RedSun} alt="red-sun-background" />
      </Content>
    </Wrapper>
  );
};

export default Landing;

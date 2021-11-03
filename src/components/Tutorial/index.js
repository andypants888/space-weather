import React from "react";

// Styles
import { Wrapper, Content, Title, Card } from "./Tutorial.styles";

// Routing
import { NavLink } from "react-router-dom";

// Card Images
import Image1 from "../../images/00-flare-web.gif";
import Image2 from "../../images/02-nasa-northern-lights.jpg";
import Image3 from "../../images/03-soho-nasa-esa.jpg";
import Image4 from "../../images/04-magnetic-sun.jpg";
import Image5 from "../../images/05-stereo-ab.jpg";
import Image6 from "../../images/06-observe-sun.jpg";
import Image7 from "../../images/07-lagrange.jpg";

const Tutorial = () => {
  // console.log('tutorial running')
  return (
    <Wrapper>
      <Title>Tutorial</Title>
      <Content>
        <NavLink to="lesson01">
          <Card>
            1. What is Space Weather?
            <img src={Image1} />
          </Card>
        </NavLink>
        <Card>
          2. How does the earth's aurora's happen?
          <img src={Image2} />
        </Card>
        <Card>
          3. How do scientists keep track of solar events?
          <img src={Image3} />
        </Card>
      </Content>
      <Title>Bonus</Title>
      <Content>
        <Card>
          1. What is the sun's magnetic field?
          <img src={Image4} />
        </Card>
        <Card>
          2. What are stereo A and B?
          <img src={Image5} />
        </Card>
        <Card>
          3. Observing the Sun <img src={Image6} />
        </Card>
        <Card>
          4. Satelites at L1 <img src={Image7} />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default Tutorial;

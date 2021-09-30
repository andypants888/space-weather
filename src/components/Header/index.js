import React from "react";

import Logo from "../../images/solar-system.png";
import SunIcon from "../../images/sun.png";
import MarsIcon from "../../images/mars.png";
import MeteorIcon from "../../images/meteor.png";
import TVIcon from "../../images/television.png";

import {
  Content,
  Wrapper,
  Navbar,
  TitleWrapper,
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <TitleWrapper>
        <img src={Logo} alt="site-logo" />
        Space Weather
      </TitleWrapper>
      <Navbar>
          <ul>
            <li><img src={SunIcon} alt="sun-icon" />Solar</li>
            <li><img src={MarsIcon} alt="mars-icon" />Mars</li>
            <li><img src={MeteorIcon} alt="meteor-icon" />Asteroids</li>
            <li><img src={TVIcon} alt="tv-icon" />TV</li>
          </ul>
        </Navbar>
    </Content>
  </Wrapper>
);

export default Header;

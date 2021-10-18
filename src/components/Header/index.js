import React from "react";

import Logo from "../../icons/solar-system.png";
import SunIcon from "../../icons/sun.png";
import MarsIcon from "../../icons/mars.png";
import MeteorIcon from "../../icons/meteor.png";
import TVIcon from "../../icons/television.png";

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

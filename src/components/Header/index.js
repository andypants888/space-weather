import React from "react";

import Logo from "../../images/solar-system.png";

import {
  Content,
  Wrapper,
  LogoImg,
  Title,
  Navbar,
  TitleNavWrapper,
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={Logo} alt="site-logo" />
      <TitleNavWrapper>
        <Title>Space Weather</Title>
        <Navbar>
          <ul>
            <li>Solar</li>
            <li>Mars</li>
            <li>Asteroids</li>
            <li>TV</li>
          </ul>
        </Navbar>
      </TitleNavWrapper>
    </Content>
  </Wrapper>
);

export default Header;

import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../../icons/solar-system.png";
import SunIcon from "../../icons/sun.png";
import EducationIcon from "../../icons/education.png";
import QuizIcon from "../../icons/quiz.png";
import HackerIcon from "../../icons/hacker.png";

import { Content, Wrapper, Navbar, TitleWrapper } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <TitleWrapper>
        <img src={Logo} alt="site-logo" />
        Experimental Space Weather
      </TitleWrapper>
      <Navbar>
        <ul>
          <NavLink to="/weather" exact={true}>
            <li>
              <img src={SunIcon} alt="sun-icon" /> Weather
            </li>
          </NavLink>
          <NavLink to="/tutorial" exact={true}>
            <li>
              <img src={EducationIcon} alt="education-icon" /> Tutorial
            </li>
          </NavLink>
          <NavLink to="/educators" exact={true}>
            <li>
              <img src={QuizIcon} alt="educators page" /> Educators
            </li>
          </NavLink>
          <NavLink to="/contact" exact={true}>
            <li>
              <img src={HackerIcon} alt="programmer-icon" /> Contact
            </li>
          </NavLink>
        </ul>
      </Navbar>
    </Content>
  </Wrapper>
);

export default Header;

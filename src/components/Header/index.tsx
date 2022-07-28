import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../../icons/solar-system.png";
import MeteorIcon from "../../icons/meteor.png";
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
          <NavLink to="/weather">
            <li>
              <img src={MeteorIcon} alt="weather icon" /> Weather
            </li>
          </NavLink>
          <NavLink to="/tutorial">
            <li>
              <img src={EducationIcon} alt="education icon" /> Tutorial
            </li>
          </NavLink>
          <NavLink to="/educators">
            <li>
              <img src={QuizIcon} alt="educators page" /> Educators
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <img src={HackerIcon} alt="contact icon" /> Contact
            </li>
          </NavLink>
        </ul>
      </Navbar>
    </Content>
  </Wrapper>
);

export default Header;

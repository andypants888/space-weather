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
          <NavLink to="/">
            <li>
              <img src={SunIcon} alt="sun-icon" /> Events
            </li>
          </NavLink>
          <NavLink to="/learn">
            <li>
              <img src={EducationIcon} alt="education-icon" /> Learn More
            </li>
          </NavLink>
          <NavLink to="/notfound">
            <li>
              <img src={QuizIcon} alt="quiz-icon" /> Quizzes
            </li>
          </NavLink>
          <NavLink to="/notfound">
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

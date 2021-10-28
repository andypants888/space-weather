import React from "react";

import Logo from "../../icons/solar-system.png";
import SunIcon from "../../icons/sun.png";
import EducationIcon from "../../icons/education.png";
import QuizIcon from "../../icons/quiz.png";
import HackerIcon from "../../icons/hacker.png";

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
        Experimental Space Weather
      </TitleWrapper>
      <Navbar>
          <ul>
            <li><img src={SunIcon} alt="sun-icon" />Events</li>
            <li><img src={EducationIcon} alt="education-icon" />Learn More</li>
            <li><img src={QuizIcon} alt="quiz-icon" />Quizzes</li>
            <li><img src={HackerIcon} alt="programmer-icon" />Credits</li>
          </ul>
        </Navbar>
    </Content>
  </Wrapper>
);

export default Header;

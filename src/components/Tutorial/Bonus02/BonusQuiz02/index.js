import React from "react";

import { Wrapper, Content, NavBlock } from "./BonusQuiz02styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const BonusQuiz02 = () => {
  var defaultThemeColors = Survey.StylesManager.applyTheme("default");

  var surveyJSON = {
    title: "CME's & Space Weather Quiz",
    showProgressBar: "bottom",
    // showTimerPanel: "top",
    // maxTimeToFinishPage: 30,
    // maxTimeToFinish: 300,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      {
        questions: [
          {
            type: "html",
            html: "- This quiz will test your knowledge of the video above <br/>- Please feel free to use your personal notes<br/>- You can use google to help, but <b> watching the video is much easier :) </b>",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "fusion",
            title:
              "Scientists can add ___ to elements to create real gold?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Atoms",
              "Electrons",
              "Energy",
              "Supernovas",
              "Solar Wind",
            ],
            correctAnswer:
              "Atoms",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "supernova",
            title: "Why do stars explode into supernova? ",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "They run out of fuel like hydrogen, helium & other elements",
              "Stars explode when they collide with black holes",
              "Actually, stars will never supernova, but shrink instead",
              "They run out of fire & gasoline, the main fuel for a star",
              "Combining hydrogen and helium cause stars to explode",
            ],
            correctAnswer: "A cloud of gas, called a nebula",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "goldorigin",
            title:
              "Where does gold ORIGINALLY come from?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "It is ejected from Supernovas in space",
              "You can find it as dust in the oceans",
              "Gold is buried deep in the earth",
              "You can find gold in local jewelry stores",
              "It is from the atmosphere of the sun, the Corona",
            ],
            correctAnswer: "It is ejected from Supernovas in space",
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "stargold",
            title:
              "How does a star change hydrogen to lead or gold? Explain in 2-3 sentences",
            // choicesOrder: "random",
            maxLength: 500,
          },
        ],
      },
    ],
    completedHtml:
      "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
    // End of SurveyJSON
  };

  // window.survey = new Survey.Model(surveyJSON);

  return (
    <Wrapper>
      <Content>
        <Survey.Survey
          json={surveyJSON}
          model={window.survey}
          onComplete={(data) => console.log(data)}
        />
        <NavBlock />
      </Content>
    </Wrapper>
  );
};

export default BonusQuiz02;

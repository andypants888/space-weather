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
            name: "energy",
            title:
              "The sun's massive gravity causes _____ to produce energy",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Nuclear fusion",
              "Evaporation",
              "Combustion",
              "Evolution",
              "Solar Wind",
            ],
            correctAnswer:
              "Nuclear fusion",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "nebula",
            title: "What was the original, early form of the Sun? ",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "A cloud of gas, called a nebula",
              "A comet, called Halley's Comet",
              "It was originally the center of the Big Bang",
              "It was originally the Earth's Moon.",
              "The sun was always a star, there was nothing before it",
            ],
            correctAnswer: "A cloud of gas, called a nebula",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "fusion",
            title:
              "What two elements are the MAIN part of the Sun's nuclear fusion?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Hydrogen & Helium",
              "Iron & Nickel",
              "Oxygen & Nitrogen",
              "Carbon Dioxide",
              "Air & Fire",
            ],
            correctAnswer: "Hydrogen & Helium",
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "whatifnosun",
            title:
              "What would happen to Earth if the Sun's nuclear reactions stopped? Explain in 2-3 sentences, ",
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

import React from "react";

import { Wrapper, Content, NavBlock } from "./Quiz02.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const Quiz02 = () => {
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
            name: "magneticshield",
            title:
              "What happens when the solar storm (example: CME) impacts earth's magnetic field?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Earth's magnetic field deflects the incoming storm towards the north & south poles",
              "Earth's magnetic shield allows the storm to pass through Earth",
              "Earth's magnetic field explodes and returns the storm back to the sun",
              "The solar storm will not impact the Earth's magnetic shield",
              "The solar storm is attracted to the Earth's magnetic field like positive & negative poles",
            ],
            correctAnswer:
              "Earth's magnetic field deflects the incoming storm towards the north & south poles",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "sunheat",
            title: "The sun's heat & energy is generated by _______?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "hydrogen reactions inside the sun's core",
              "the sun's currents, which are visible on the surface",
              "iron and copper reactions inside the core",
              "geomagnetic storms that sometimes impact Earth",
              "all of the other choices",
            ],
            correctAnswer: "hydrogen reactions inside the sun's core",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "solarstorm",
            title: "What creates solar storms?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Magnetic fields on the sun stretch and break",
              "The sun's core begins to break down",
              "Hot clouds of plasma exist on the surface",
              "The sun's corona becomes visible on Earth",
              "There is no currently known reason by science",
            ],
            correctAnswer: "Magnetic fields in the sun stretch and break",
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "earthImpact",
            title:
              "Explain how the northern lights (auroras) are connected to the Sun in 3 - 4 sentences",
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

export default Quiz02;

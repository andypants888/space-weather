import React from "react";

import { Wrapper, Content, NavBlock } from "./Quiz01.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const Quiz01 = () => {
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
            name: "warmup",
            title: "Space weather is caused by events from _____",
            choicesOrder: "random",
            // isRequired: true,
            choices: [
              "the Galaxy",
              "the Moon",
              "the Vacuum of space",
              "the Sun",
              "none of the choices",
            ],
            correctAnswer: "the Sun",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "cme",
            title: "What does CME stand for in space weather?",
            choicesOrder: "random",
            choices: [
              "Coronary Meta Electrolysis",
              "CME Group (Chicago Merchantile)",
              "Coronal Mass Ejection",
              "Continuing Medical Education",
            ],
            correctAnswer: "Coronal Mass Ejection",
          },
        ],
      },
      {
        questions: [
          {
            type: "ranking",
            name: "eventorder",
            title: "Rank the following events from start (top) to end (bottom)",
            choicesOrder: "random",
            choices: [
              "Interplanetary Shocks",
              "CME (Coronal Mass Ejections)",
              "Geomagnetic Storms",
            ],
            correctAnswer: ["CME (Coronal Mass Ejections)", "Interplanetary Shocks", "Geomagnetic Storms"],
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "earthImpact",
            title: "Explain why people on Earth should be concerned about CME's in 3 - 4 sentences",
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
        <Survey.Survey json={surveyJSON} model={window.survey} onComplete={data=>console.log(data)}/>
        <NavBlock />
      </Content>
    </Wrapper>
  );
};

export default Quiz01;

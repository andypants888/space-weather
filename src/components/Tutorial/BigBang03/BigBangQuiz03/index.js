import React from "react";

import { Wrapper, Content, NavBlock } from "./BigBangQuiz03.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const BigBangQuiz03 = () => {
  var defaultThemeColors = Survey.StylesManager.applyTheme("default");

  var surveyJSON = {
    title: "Big Bang Evidence Quiz",
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
            name: "leastknow",
            title:
              "What time period do scientists know LEAST about the Big Bang?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "The first second",
              "The first 20 minutes",
              "The first 400,000 years",
              "Between 400,000 years to current day",
              "The current day status",
            ],
            correctAnswer:
              "The first second",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "notevidence",
            title: "What is NOT a line of evidence for the Big Bang? ",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "The age of the Earth is 4.5 billion years old",
              "The universe is made mostly of Hydrogen & Helium",
              "Cosmic Background Radiation",
              "An expanding universe",
              "Particle accelarators can simulate conditions of the Big Bang",
            ],
            correctAnswer: "The age of the Earth is 4.5 billion years old",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "expanding",
            title:
              "Why does an expanding universe give support to the Big Bang??",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "An expanding universe suggests our past universe was very small",
              "The expanding universe is not one of the lines of evidence for the Big Bang",
              "The universe expands because it is alive",
              "The universe expanding shows that the center is our Sun",
              "The universe is currently shrinking, not expanding",
            ],
            correctAnswer: "An expanding universe suggests our past universe was very small",
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
              "In general, explain what the evidence is for the Big Bang in 2-3 sentences. ",
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

export default BigBangQuiz03;

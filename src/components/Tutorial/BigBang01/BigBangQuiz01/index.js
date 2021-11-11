import React from "react";

import { Wrapper, Content, NavBlock } from "./BigBangQuiz01.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const BigBangQuiz01 = () => {
  var defaultThemeColors = Survey.StylesManager.applyTheme("default");

  var surveyJSON = {
    title: "Big Bang Quiz",
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
            name: "firstelement",
            title:
              "What was the first element created by the Big Bang",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Hydrogen",
              "Carbon Dioxide",
              "Oxygen",
              "Helium",
              "Lithium",
            ],
            correctAnswer:
              "Hydrogen",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "unknown",
            title: "What is totally unknown about the Big Bang?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "What came before the Big Bang is unknown",
              "What happened in the first 10 minutes of the Big Bang is unknown",
              "We don't know why the universe cooled down",
              "We don't have any data on how stars formed",
              "It is unknown how the first elements formed",
            ],
            correctAnswer: "What came before the Big Bang is unknown",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "acceptance",
            title:
              "When did the Big Bang first gain scientific acceptance?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "1960s",
              "1800s",
              "1990s",
              "1700s",
              "1920s",
            ],
            correctAnswer: "1960s",
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "generalsummary",
            title:
              "Generally what happened during the Big Bang? Explain in 2-3 sentences",
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

export default BigBangQuiz01;

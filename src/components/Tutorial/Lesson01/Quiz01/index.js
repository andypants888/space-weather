import React from "react";

import { Wrapper, Content, NavBlock } from "./Quiz01.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const Quiz01 = () => {
  var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
  defaultThemeColors["$main-color"] = "#000000";
  defaultThemeColors["$main-hover-color"] = "#6fe06f";
  defaultThemeColors["$text-color"] = "#4a4a4a";
  defaultThemeColors["$header-color"] = "#7ff07f";

  defaultThemeColors["$header-background-color"] = "#000000";
  defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

  Survey.StylesManager.applyTheme();

//   var surveyJSON = {
//     title: "American History",
//     showProgressBar: "bottom",
//     showTimerPanel: "top",
//     maxTimeToFinishPage: 10,
//     maxTimeToFinish: 25,
//     firstPageIsStarted: true,
//     startSurveyText: "Start Quiz",
//   };
  var surveyJSON = {
    title: "CME's & Space Weather",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 30,
    maxTimeToFinish: 300,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",

    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question2",
            title: "Space weather is caused by events from _____",
            correctAnswer: "item4",
            isRequired: true,
            choices: [
              { value: "item1", text: "the Galaxy" },
              { value: "item2", text: "the Moon" },
              { value: "item3", text: "the Vacuum of space" },
              { value: "item4", text: "the Sun" },
            ],
          },
          {
            type: "radiogroup",
            name: "question1",
            title: "What does CME in space weather stand for?",
            correctAnswer: "item3",
            isRequired: true,
            choices: [
              { value: "item1", text: "Coronary Meta Electrolysis" },
              { value: "item2", text: "CME Group (Chicago Merchantile)" },
              { value: "item3", text: "Coronal Mass Ejection" },
              { value: "item4", text: "Continuing Medical Education" },
            ],
          },
          {
            type: "ranking",
            name: "question3",
            title: "Rank the following events from start (top) to end (bottom)",
            correctAnswer: ["item2", "item1", "item3"],
            isRequired: true,
            choices: [
              { value: "item1", text: "Interplanetary Shocks" },
              { value: "item2", text: "CME (Coronal Mass Ejections)" },
              { value: "item3", text: "Geomagnetic Storms" },
            ],
          },
          {
            type: "comment",
            name: "question5",
            title:
              "Explain why people on Earth should be concerned about CME's in 3 - 4 sentences",
            isRequired: true,
            maxLength: 500,
          },
        ],
      },
    ],
  };

  window.survey = new Survey.Model(surveyJSON);

  return (
    <Wrapper>
      <Content>
        <Survey.Survey json={surveyJSON} />
        <NavBlock />
      </Content>
    </Wrapper>
  );
};

export default Quiz01;

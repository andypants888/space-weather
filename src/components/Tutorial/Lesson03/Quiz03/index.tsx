import React from "react";

import { Wrapper, Content, NavBlock } from "./Quiz03.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const Quiz03 = () => {
  var surveyJSON = {
    title: "Space Research Quiz",
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
            name: "gravityshot",
            title:
              "Why are objects like the moon or planets USEFUL for satelite voyages?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Satellites can use the gravity of objects to slingshot very far",
              "The moon and planets can provide shelter for satellites",
              "Objects like the moon are bad for spacecraft because they can crash",
              "Planets and moons can reflect radiation towards the satellites",
              "Spacecraft use the planets and moons to refuel their gasoline",
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
            name: "lagrange",
            title:
              "Why are lagrange points like L1 important to space scientists?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "Lagrange points like L1 are where spacecraft can 'park' to observe the sun",
              "Lagrange points are very dangerous and cause satellites to collide",
              "Lagrange points like L1 are used to slingshot spacecraft into a faster orbit",
              "L1, a lagrange point, is where the Earth's moon is located",
              "L1, a lagrange point, is where the Earth's magnetosphere is located",
            ],
            correctAnswer:
              "Lagrange points like L1 are where spacecraft can 'park' to observe the sun",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "satelitecount",
            title: "How many heliophysics satellites does nasa have?",
            choicesOrder: "random",
            isRequired: true,
            choices: ["15+", "7-14", "4-6", "2-3", "1"],
            correctAnswer: "15+",
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
              "Explain how NASA tracks the sun in 2 - 3 sentences. Make sure you include 'L1', 'Near-Earth', and 'orbit' in your response",
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

  return (
    <Wrapper>
      <Content>
        <Survey.Survey
          json={surveyJSON}
          model={window.survey}
          onComplete={(data:any) => console.log(data)}
        />
        <NavBlock />
      </Content>
    </Wrapper>
  );
};

export default Quiz03;

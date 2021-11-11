import React from "react";

import { Wrapper, Content, NavBlock } from "./BigBangQuiz02.styles";

// SurveyJS

import * as Survey from "survey-react";
import "survey-react/survey.css";

const BigBangQuiz02 = () => {
  var defaultThemeColors = Survey.StylesManager.applyTheme("default");

  var surveyJSON = {
    title: "Cosmic Rays Quiz",
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
            name: "cosmicrayscannot",
            title:
              "Cosmic Rays CANNOT tell us about ______",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "The age of our Earth",
              "What the universe is made of, (mostly Hydrogen & Helium)",
              "Dark matter and antimatter out in space",
              "Where the cosmic rays come from",
              "The velocity or the frequency of incoming cosmic rays",
            ],
            correctAnswer:
              "The age of our Earth",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "whatis",
            title: "Generally what is a cosmic ray? ",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "A beam of light from outside the solar system",
              "Particles launched from stars or supernova outside our solar system",
              "It is the light from our own sun, also called photons",
              "Cosmic rays are a type of fish related to sharks",
              "Cosmic rays are used by phones to send text messages",
            ],
            correctAnswer: "Particles launched from stars or supernova outside our solar system",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "source",
            title:
              "Where do cosmic rays come from?",
            choicesOrder: "random",
            isRequired: true,
            choices: [
              "They come only from our Sun",
              "From stars and supernovas beyond our solar system",
              "They come from only black holes",
              "From all the planets and moons",
              "Cosmic rays are actually made on Earth",
            ],
            correctAnswer: "From stars and supernovas beyond our solar system",
          },
        ],
      },
      {
        // maxTimeToFinish: 150,
        questions: [
          {
            type: "comment",
            name: "whatiscosmicray",
            title:
              "What are cosmic rays and why do scientists care about them? Explain in 2-3 sentences",
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

export default BigBangQuiz02;

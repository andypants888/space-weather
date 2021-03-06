import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Lesson02.style";

// SurveyJS

import Quiz02 from "./Quiz02";

const Lesson02 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Tutorial</h1>
        </div>
        <div>
          <h3>Lesson 02: Earth's Aurora</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/HJfy8acFaOg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          // mozallowfullscreen="mozallowfullscreen"
          // msallowfullscreen="msallowfullscreen"
          // oallowfullscreen="oallowfullscreen"
          // webkitallowfullscreen="webkitallowfullscreen"
          // allowfullscreen
        ></iframe>
        <div>
          <p>
            Watch the video! <br />
            Take notes! <br />
            Be ready for quiz! 😱
          </p>
        </div>
        <textarea rows={7} cols={43}>
          - Type notes here...
        </textarea>
        <SurveyContainer>
          <Quiz02 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Lesson02;

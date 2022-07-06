import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./BigBang01.style";

// SurveyJS

import BigBangQuiz01 from "./BigBangQuiz01";

const BigBang01 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Big Bang</h1>
        </div>
        <div>
          <h3>1. What really happened?</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/wNDGgL73ihY"
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
          <BigBangQuiz01 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default BigBang01;

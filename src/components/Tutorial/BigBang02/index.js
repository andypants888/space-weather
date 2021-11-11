import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./BigBang02.style";

// SurveyJS

import BigBangQuiz02 from "./BigBangQuiz02";

const BigBang02 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Big Bang</h1>
        </div>
        <div>
          <h3>2. Cosmic Rays</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/91801Y1lsCg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          allowfullscreen
        ></iframe>
        <div>
          <p>
            Watch the video! <br />
            Take notes! <br />
            Be ready for quiz! 😱
          </p>
        </div>
        <textarea rows="7" cols="43">
          - Type notes here...
        </textarea>
        <SurveyContainer>
          <BigBangQuiz02 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default BigBang02;

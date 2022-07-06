import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./BigBang03.style";

// SurveyJS

import BigBangQuiz03 from "./BigBangQuiz03";

const BigBang03 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Big Bang</h1>
        </div>
        <div>
          <h3>3. Evidence for Big Bang</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/aPStj2ZuXug"
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
            <strong>**Main Video Ends at 8:50 minutes**</strong> <br />
            Watch the video! <br />
            Take notes! <br />
            Be ready for quiz! 😱
          </p>
        </div>
        <textarea rows={7} cols={43}>
          - Type notes here...
        </textarea>
        <SurveyContainer>
          <BigBangQuiz03 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default BigBang03;

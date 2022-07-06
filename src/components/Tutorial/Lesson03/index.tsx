import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Lesson03.style";

// SurveyJS

import Quiz03 from "./Quiz03";

const Lesson03 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Tutorial</h1>
        </div>
        <div>
          <h3>Lesson 03: Eyes in the Sky</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/AqRQ_93kFKs"
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
          <Quiz03 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Lesson03;

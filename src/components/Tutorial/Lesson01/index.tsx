import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Lesson01.style";

// SurveyJS

import Quiz01 from "./Quiz01";

const Lesson01 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Tutorial</h1>
        </div>
        <div>
          <h3>Lesson 01: CMEs & Space Weather</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/oHHSSJDJ4oo"
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
          - CME stands for ___ Type here!!!
        </textarea>
        <SurveyContainer>
          <Quiz01 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Lesson01;

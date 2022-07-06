import React from "react";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Bonus01.style";

// SurveyJS

import BonusQuiz01 from "./BonusQuiz01";

const Bonus01 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Bonus</h1>
        </div>
        <div>
          <h3>1. Sun's Nuclear Reactor</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/2HoTK_Gqi2Q"
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
          <BonusQuiz01 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Bonus01;

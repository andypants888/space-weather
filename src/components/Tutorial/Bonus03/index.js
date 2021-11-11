import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Bonus03.style";

// SurveyJS

import BonusQuiz03 from "./BonusQuiz03";

const Bonus03 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Bonus</h1>
        </div>
        <div>
          <h3>3. Orbit Simulator</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/2HoTK_Gqi2Q"
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
          <BonusQuiz03 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Bonus03;

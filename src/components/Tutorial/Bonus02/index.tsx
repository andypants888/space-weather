import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Bonus02.style";

// SurveyJS

import BonusQuiz02 from "./BonusQuiz02";

const Bonus02 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Bonus</h1>
        </div>
        <div>
          <h3>2. The Star Forge</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/jf_4z4AKwJg"
          title="YouTube video player"
          frameBorder="0"
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
        <textarea rows={7} cols={43}>
          - Type notes here...
        </textarea>
        <SurveyContainer>
          <BonusQuiz02 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Bonus02;

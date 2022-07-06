import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content } from "./Bonus03.style";

// SurveyJS

// import BonusQuiz03 from "./BonusQuiz03";

const Bonus03 = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Bonus</h1>
        </div>
        <div>
          <h3>3. University of Colorado Orbit Simulator</h3>
        </div>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/m6e2y4fef1I"
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
          <h2>
            Video Explains the Simulator! <br />
            Or{" "}
            <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html">
              <strong>GET STARTED</strong>
            </a>{" "}
            by clicking the{" "}
            <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html">
              <strong>link</strong>
            </a>
            !
          </h2>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Bonus03;

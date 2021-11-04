import React from "react";
// import ReactDOM from "react-dom";
// Styles

import { Wrapper, Content, SurveyContainer } from "./Lesson01.style";

// SurveyJS

import Quiz01 from "./Quiz01"

const Lesson01 = () => {

  return (
    <Wrapper>
      <Content>
        <div>Tutorial</div>
        <div>Lesson 01</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oHHSSJDJ4oo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit
        </div>
        <div>
          dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant
          pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
          taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </div>
        <SurveyContainer>
          <Quiz01 />
        </SurveyContainer>
      </Content>
    </Wrapper>
  );
};

export default Lesson01;

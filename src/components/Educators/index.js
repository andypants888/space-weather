import React from "react";

import { Wrapper, Content } from "./Educators.styles";

const Educators = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Lesson Planning</h1>
        <p>
          Welcome educators. As a former K-12 science teacher, I made this page
          to help a wider range of students enjoy science while remaining
          academically rigorous. <br />
          Here are some ideas on how to use this web-app in your classroom.
          <br />
          Please contact me if you have any feedback. 🙂
        </p>
        <h2>Traditional Approach</h2>
        <p>
          - Daily Lessons from tutorials page. Quiz & Scores included
          <br />
          - Use daily updates as "prompts" for daily/weekly science
          writing/warmup
          <br />
        </p>
        <h2>Project Based Approach</h2>
        <p>
          - Use Space Weather tool as part of Mars Colony, Moon Colony,
          Spaceship, or Satelite Projects <br />
          - Use solar storm events to setup ideal launch dates as part of
          project <br />
          - Assign a group member to track weather throughout the project <br />
        </p>
        <h2>High School/Undergraduate Uses</h2>
        <p>
          - High School NGSS{" "}
          <a href="https://www.nextgenscience.org/topic-arrangement/hsspace-systems">
            (link)
          </a>
          <br />- HS-ESS1-1. Develop a model based on evidence to illustrate the
          life span of the sun and the role of nuclear fusion in the sun’s core
          to release energy that eventually reaches Earth in the form of
          radiation. <br />- Clarification: Emphasis is on the energy transfer
          mechanisms that allow energy from nuclear fusion in the sun’s core to
          reach Earth. Examples of evidence for the model include observations
          of the masses and lifetimes of other stars, as well as the ways that
          the sun’s radiation varies due to sudden solar flares (“space
          weather”), the 11-year sunspot cycle, and non-cyclic variations over
          centuries.
          <br /> - Undergraduate - Great companion resource to astronomy,
          astrobiology and space exploration for non-technical majors
          <br />
        </p>
        <h2>Source of Data</h2>
        <p>
          - Space Weather data provided thanks to DONKI from NASA.
        </p>
      </Content>
    </Wrapper>
  );
};

export default Educators;

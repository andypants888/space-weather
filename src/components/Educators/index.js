import React from "react";

import { Wrapper, Content } from "./Educators.styles";

const Educators = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Lesson Planning & Support</h1>
        <p>
          Welcome educators. As a former K-12 science teacher, I made this page
          to help a wider range of students enjoy science while remaining
          academically rigorous. <br />
          Here are some ideas on how to use this web-app in your classroom.<br />
          Please contact me if you have any feedback. 🙂
          
        </p>
        <h2>Traditional/Investigation Approach (A classic)</h2>
        <p>
          - Lessons Per Day <br />
          - How to engage students? Hook & bait <br />
          - Exam-based Final Assessment <br />
        </p>
        <h2>Project Based Approach (My personal preference)</h2>
        <p>
          - End products <br />
          - How to engage students? Hook & bait <br />
          - Practicalities: grouping / hands-on <br />
          - Project-based Final Assessment <br />
        </p>
        <h2>NGSS Standards / Prereqs</h2>
        <p>
          - Middle School <br />
          - High School <br />
          - Undergraduate <br />
          - Source Data <br />
        </p>
      </Content>
    </Wrapper>
  );
};

export default Educators;

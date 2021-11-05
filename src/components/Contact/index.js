import React from "react";

import { Wrapper, Content } from "./Contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Contact</h1>
        <p>
          Github: <br />
          linkedIn: <br />
          Email: ___ @ realaddress.com<br />
          </p>
        <p></p>
        <h1>About Me</h1>
        <p>
          Hi, my name is Andrew and I am a full-stack software-engineer /
          web-developer originally from San Diego, California. <br />
          In the past, I was full-time High School Science Teacher in both
          California and later, the country of Colombia. <br />
          In my spare time I am an avid traveler, history-lover, and
          language-learner. (English, Chinese, Spanish, Javascript)
        </p>
      </Content>
    </Wrapper>
  );
};

export default Contact;

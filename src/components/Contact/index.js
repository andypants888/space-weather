import React from "react";

import { Wrapper, Content, BioBox } from "./Contact.styles";

import bioGif from "../../gifs/teacher-2018.gif";

const Contact = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Contact</h1>
        <p>
          Github: <a href="https://github.com/andypants888">andypants888</a>{" "}
          <br />
          linkedIn{" "}
          <a href="https://www.linkedin.com/in/andrew-zhou-394228104/">
            Profile
          </a>
          <br />
          Email:{" "}
          <a href="mailto:andy@expspaceweather.com">andy@expspaceweather.com</a>
          <br />
        </p>
        <p></p>
        <h1>About Me</h1>
        <BioBox>
          <img src={bioGif} />
          <p>
            <div>
              Hi, I'm Andrew, a full-stack software-engineer / web-developer
              originally from San Diego, California.
            </div>
            <div>
              Before coding, I was full-time High School Science Teacher in both
              California and the country of Colombia.
            </div>
            <div>
              I completed my undergraduate education at the University of
              California, Davis in Biology, and received my teaching certificate
              from San Diego State University.
            </div>
            <div>
              In my spare time I am an avid traveler, history-lover, and
              language-learner. (English, Chinese, Spanish, Javascript)
            </div>
          </p>
        </BioBox>

        <h2>Thanks & Credits</h2>
        <h3>Icons</h3>
        <p>
          <div>
            Northern Lights, Lightning Bolt, Earth, Clipboard, Education Icons
            made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Monitoring Icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/ultimatearm"
              title="ultimatearm"
            >
              ultimatearm
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Flare Icon made by{" "}
            <a href="https://smashicons.com/" title="Smashicons">
              Smashicons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Gap Icon made by{" "}
            <a href="" title="geotatah">
              geotatah
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Solar system Icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/smalllikeart"
              title="smalllikeart"
            >
              smalllikeart
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>

          <div>
            News Icon made by{" "}
            <a href="" title="BZZRINCANTATION">
              BZZRINCANTATION
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>

          <div>
            Quiz Icon made by{" "}
            <a href="" title="rsetiawan">
              rsetiawan
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </p>
        <h3>Data</h3>
        <p>
          Space Weather Notifications by DONKI, CCMC, NASA, and partners @{" "}
          <a href="https://ccmc.gsfc.nasa.gov/about.php">
            ccmc.gsfc.nasa.gov/about.php
          </a>
        </p>
        <h3>3rd Party Libraries</h3>
        <p>
          <a href="https://surveyjs.io/">SurveyJS.io</a> for quizzing format.
          Thank you.
        </p>
        <h3>Other</h3>
        <p>
          Countless tutorials, articles, stackoverflow/forum responses, videos,
          and advice floating on the web 😁
        </p>
      </Content>
    </Wrapper>
  );
};

export default Contact;

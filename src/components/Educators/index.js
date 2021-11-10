import React from "react";

import { Wrapper, Content } from "./Educators.styles";

const Educators = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Welcome Teachers!</h1>
        <p>
          <div>
            As a former HS science teacher, I made this web-app to simplify
            NASA's authentic, but complex, research data for High School &
            Undergraduate students.
          </div>
          <div>Please contact me if you have any feedback. 🙂</div>
        </p>
        <h2>How can I use this site for lessons?</h2>
        <p>
          <div>
            - Use one tutorial for one lesson. Quiz & Scores included in the
            lesson. I plan to improve the quiz section later
          </div>
          <div>
            - Conduct discussions/investigations around the tutorial or daily
            weather
          </div>
          <div>
            - Use daily weather as "prompts" for daily/weekly science
            writing/warmup. (Some weeks are very low activity, others very
            active)
          </div>
        </p>
        <h2>What about using the site for projects?</h2>
        <p>
          <div>
            - Use "Weather" page to plan out Mars Colony, Moon Colony, Rocket
            Launch, and more space projects
          </div>
          <div>
            - Use solar storm events to setup ideal launch dates as part of
            project
          </div>
          <div>
            - Assign a group member ("Meteorologist/Forecaster") to track &
            analyze space weather throughout the project
          </div>
        </p>
        <h2>My students struggle with English, what can I do?</h2>
        <p>
          <div>
            - There are several extensions for chrome browsers that can
            auto-translate youtube/netflix subtitles, and hover-translate
          </div>
          <div>
            - In general you should only use extensions with a{" "}
            <strong>large number of users</strong> and a{" "}
            <strong>high star-rating</strong>.
          </div>
          <div>
            - I personally use{" "}
            <a href="https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm/related?hl=en">
              Youtube Dual Subtitles
            </a>{" "}
            and{" "}
            <a href="https://chrome.google.com/webstore/detail/transover/aggiiclaiamajehmlfpkjmlbadmkledi/related?utm_source=chrome-ntp-icon">
              TransOver{" "}
            </a>
            (Hover-Translate) for English to Chinese. But there are many good
            extensions on the chrome web store
          </div>
        </p>
        <h2>What standards does this web-app cover?</h2>
        <p>
          <div>
            - Develop a model based on evidence to illustrate the life span of
            the sun and the role of nuclear fusion in the sun’s core to release
            energy that eventually reaches Earth in the form of radiation.{" "}
            <a href="https://www.nextgenscience.org/topic-arrangement/hsspace-systems">
              (HS-ESS1-1)
            </a>
          </div>
          <div>
            - Examples of evidence for the model include observations of the
            masses and lifetimes of other stars, as well as the ways that the
            sun’s radiation varies due to sudden solar flares (“space weather”),
            the 11-year sunspot cycle, and non-cyclic variations over centuries.
          </div>
        </p>
        <h2>How do I use this for college students?</h2>
        <p>
          <div>
            - Challenge undergraduates to correctly interpret each weather event
          </div>
          <div>
            - Challenge undergraduates to read the event details and advanced
            articles in each event
          </div>
          <div>
            - Have students collect data in Excel/Sheets/Program-of-choice and
            write paper on solar weather patterns
          </div>
        </p>
        <h2>What exactly is a "Solar Storm"?</h2>
        <p>
          <div>
            A solar storm can be several types, and all originate from the Sun.{" "}
          </div>
          <div>- Coronal Mass Ejections (CME) (Made of Gas/Plasma)</div>
          <div>- Solar Flares (Made of Light / X-Rays)</div>
          <div>- Geomagnetic Storm (GST)</div>
          <div>- Solar Energetic Particle Storms (SEP)</div>
          <div>
            - <a href="en.wikipedia.org/wiki/Solar_storm">More info</a>
          </div>
        </p>
        <h2>When can I expect to see more events? (for lesson plans)</h2>
        <p>
          <div>
            - Check the weather for the last 30 days on the weather page to get
            an idea of how active your current month is.
          </div>
          <div>
            - Generally, CMEs and Flares are starting points for more weather
            events. CMEs and Flares are a special occaision for the class!
            Sometimes you can see them in online news articles!
          </div>
        </p>
        <h2>The weather data is too confusing, help!</h2>
        <p>
          <div>
            Real-time event data is difficult to understand, but maybe good for
            an authentic view at 'real experimental data'
          </div>
          <div>
            I would focus on the time of the alert (converted to local timezone)
            and yes/no if event is currently ongoing,
          </div>
          <div>
            - example: is it raining? yes/no vs how fast is rain falling?
            20cm/hour?
          </div>
          <div>
            - example: is there a geomagnetic storm this week? yes/no vs Which
            event triggered this geomagnetic storm? CME ID--00--example--00
            caused the storm.
          </div>
          <div>
            Try challenging your students to understand interpret just one solar
            event! You see the event details (
            <a href="https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/18271/1">
              example
            </a>
            ) on the bottom-left of each weather pop-up window.
          </div>
        </p>
        <h2>How is NASA collecting all this information?</h2>
        <p>
          <div>
            - NASA along with global partners like the ESA have a large fleet of
            intersteller satellites and spacecraft. 🤯 View{" "}
            <a href="https://science.nasa.gov/science-red/s3fs-public/styles/background_image_file_size/public/thumbnails/image/HPD%20Fleet%20Chart_Oct%202021_0.png?itok=q7O1gptS">
              this diagram
            </a>
            . And{" "}
            <a href="https://www.nasa.gov/sites/default/files/hso-fleet.jpg">
              this
            </a>
            .
          </div>
          <div>- Challenge undergraduates to investigate the difference!</div>
        </p>
        <h2>How can I explain the magnetopause to students?</h2>
        <p>
          <div>
            - I would use the magnetosphere, magnetopause, and informally
            "magnetic shield" interchangably with high school students, but
            point out there is a technical difference.
          </div>
          <div>
            - This is a tricky topic since there is not much intro-level
            material on this topic.
          </div>
          <div>- Challenge undergraduates to investigate the difference!</div>
        </p>
        <h2>What are radiation belt enhancement events?</h2>
        <p>
          <div>
            Radiation belt enhancements refer to van allen belts (region near
            the earth). During a solar event (example: CME), the radiation
            becomes trapped in the van allen belts, causing problems for
            spacecraft or astronauts inside the belts.
          </div>
        </p>
        <h2>Who provides the weather data?</h2>
        <p>
          <div>
            - Space Weather data provided thanks to{" "}
            <a href="https://ccmc.gsfc.nasa.gov/index.php">DONKI</a> from NASA.
          </div>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Educators;

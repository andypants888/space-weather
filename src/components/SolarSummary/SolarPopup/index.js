import React from "react";

// Style
import { Content, Wrapper } from "./SolarPopup.style";

const SolarPopup = (props) => {
  return props.trigger ? (
    <Wrapper>
      <Content>
        {props.message}
        <button onClick={() => props.setTrigger(false)}>Less Info</button>
      </Content>
    </Wrapper>
  ) : (
    ""
  );
};

export default SolarPopup;

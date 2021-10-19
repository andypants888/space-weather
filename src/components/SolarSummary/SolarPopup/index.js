import React from "react";

// Style
import { Content, Wrapper } from "./SolarPopup.style";

const SolarPopup = (props) => {
  let regex = /^(## Summary:\n\n).*(\n\n\n)/gms;

  return props.trigger ? (
    <Wrapper>
      <Content>
        {/* <div>{`${props.eventTime} + ${props.eventType} + ${props.URL} +`}</div> */}
        <br />
        <div>{props.message.match(regex)}</div>
        <br />
        <button onClick={() => props.setTrigger(false)}>Less Info</button>
      </Content>
    </Wrapper>
  ) : (
    ""
  );
};

export default SolarPopup;

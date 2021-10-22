import React from "react";

// Styles

import { Wrapper, Content } from "./RegexReader.style.js"

const RegexReader = (props) => {
    const {message, eventType} = props;
    
// Switch Regex Cases
const ipsRegex =
/(Message Type: Space Weather Notification - Interplanetary Shock)/g;
const reportRegex = /(Message Type: Weekly Space Weather Summary Report)/g;
const cmeUpdateRegex = /(CME update)/g;
const cmeStandardRegex = /(Message Type: Space Weather Notification - CME \()/g;
const rbeStandardRegex = /(Message Type: Space Weather Notification - Radiation Belt Enhancement)/g;

    switch (true) {
        case cmeStandardRegex.test(message):
            return (
                <Wrapper>
                    <Content>
                        {eventType}
                        <br />
                        <br />
                        break
                        <br />
                        <br />
                        {message}
                    </Content>
                </Wrapper>
            )
        default:
            return null;
    }
}

export default RegexReader;
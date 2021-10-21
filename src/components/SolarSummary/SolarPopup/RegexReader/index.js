import React from "react";

// Styles

import { Wrapper, Content } from "./RegexReader.style.js"

const RegexReader = (props) => {
    const {regexMessage, eventType} = props;
    
    switch (eventType) {
        case "CME":

            
            return (
                <Wrapper>
                    <Content>
                        {eventType}
                        <br />
                        <br />
                        break
                        <br />
                        <br />
                        {regexMessage}
                    </Content>
                </Wrapper>
            )
        default:
            return null;
    }
}

export default RegexReader;
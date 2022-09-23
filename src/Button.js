// code which creates a Button component 
// imports the style sheet which includes how to style the button 
import "./index.css"
// states in react allow us to have state variables for our button 
// in this case, the state variable keeps track of whether the button is yes, no or maybe 
import React, { useState } from "react";

export default function Button() {
    // 0: No, 1: Yes, 2: Maybe
    // by default, have the button be on No 
    const [state, setState] = useState(0);
    // this function transitions the button from No to Yes, Yes to Maybe, Maybe to No 
    function betterToggleState() {
        setState((prevState) => (prevState + 1) % 3)
    }
    // define variable colortoshow which holds the color of the button depending on the state of the button (red for No, Green for Yes, Yellow for Maybe )
    let colortoshow;
    // define the text in the button depending on the state of the button ("Yes" for Yes, "No" for No, "Maybe" for Maybe)
    let text;
    // if state is 0 (No), set button to red and text to "no"
    if (state === 0) {
        colortoshow = "red";
        text = "no";
    // if state is 1 (Yes), set button to green and text to "yes"
    } else if (state === 1) {
        colortoshow = "green";
        text = "yes";
    // if state is 2 (Maybe), set button to yellow and text to "maybe"
    } else {
        colortoshow = "yellow";
        text = "maybe"
    }
    // return the button 
    // when the button is clicked, call betterToggleState 
    return (
        <div className="Button">
            <button onClick={betterToggleState} style={{backgroundColor: colortoshow}}>
                {text}
            </button>
        </div>
    );
}

import React, { useState } from "react";
import Toggle from "./Toggle";
import ReactDOM from "react-dom";
import App from "./components/App";

function Toggle() {
    const [isOn, setIsOn] = useState(false);
  
    function handleClick() {
        setIsOn((isOn) => !isOn);
      }
    
      const color = isOn ? "red" : "white";
  
    return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
  }
  

export default useState;
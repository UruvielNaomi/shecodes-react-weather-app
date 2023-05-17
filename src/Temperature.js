import React from "react";
import img from "./images/clouds-icon.png";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <img className="image-today" src={img} alt="weather" />
      <span className="temperature-today">
        <span id="temperature">22</span>
        <span id="celsius-element" className="boldTemp no-events">
          °C
        </span>
        <span id="fahrenheit-element">°F</span>
      </span>
    </div>
  );
}
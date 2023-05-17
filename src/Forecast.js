import React from "react";
import "./Forecast.css";
import img from "./images/sun-icon.png";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="col-2 prediction-small">
        <div id="prediction-one">{props.day}</div>
        <div className="image">
          <img className="small-image" src={img} alt="sun" />
        </div>
        {props.celsius}°
      </div>
    </div>
  );
}
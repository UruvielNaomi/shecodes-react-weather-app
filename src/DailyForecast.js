import React from "react";
import "./DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast">
      <div className="col-2 prediction-small">
        <div className="forecastDay">{props.day}</div>
        <div className="image">
          <WeatherIcon size={17} code="01d"/>
        </div>
        <span className="maxTemp">{props.maxtemp}°</span><span className="minTemp">{props.mintemp}°</span>
      </div>
    </div>
  );
}
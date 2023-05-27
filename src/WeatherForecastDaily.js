import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDaily.css";

export default function WeatherForecastDaily (props) {
  function maxTemperature () {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`
  }

  function minTemperature () {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`
  }

  function day() {
    let date = new Date(props.data.dt *1000);
    let day = date.getDay();
    
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <span className="WeatherForecastDaily">
      <div className="forecastDay">
        {day()}</div>
      <div className="image">
        <WeatherIcon size={17} code={props.data.weather[0].icon}/>
      </div>
      <span className="maxTemp">
        {maxTemperature()}
      </span>
      <span className="minTemp">
        {minTemperature()}
      </span>
    </span>
    )
}
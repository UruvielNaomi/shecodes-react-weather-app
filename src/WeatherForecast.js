import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2 prediction-small">
            <div className="forecastDay">Fri</div>
            <div className="image">
              <WeatherIcon size={17} code="01d"/>
            </div>
            <span className="maxTemp">18°</span><span className="minTemp">11°</span>
          </div>
        </div>
      </div>
    )
}
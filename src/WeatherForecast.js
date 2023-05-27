import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  
  let apiKey = "87a61f8ed4b817c3a5de30ad18cd9aa5";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse);

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
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  
  const apiKey = "5354b60afda2b7800186c06153932396";
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
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
useEffect(() => {
  setLoaded(false);
  },[props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
              return (
              <div className="col-2 prediction-small" key={index}> 
                <WeatherForecastDaily data={dailyForecast} />
              </div>
              );
              } else {
                return (null)
              }
            })}
        </div>
      </div>
    )
  } else {
    let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

  }
}
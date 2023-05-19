import React, { useState } from "react";
import img from "./images/clouds-icon.png";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form id="city-form">
            <input
              className="search-bar"
              type="text"
              id="city-input"
              placeholder="Enter a city"
              autocomplete="off"
            />
            <input className="search-button" type="submit" value="Search" />
          </form>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="city">{weatherData.city}</div>
          </div>
      
        <div className="prediction">
          <div className="row">
            <div className="col-6">
              <div id="day-time">Updated on: Sat 19:48</div>
            </div>
            <div className="col-3">Humidity</div>
            <div className="col-3">Wind</div>
          </div>
  
          <div className="row">
            <div className="col-6" id="description">
              {weatherData.description}
            </div>
            <div className="col-3" id="humidity">
              {weatherData.humidity}%
            </div>
            <div className="col-3" id="wind">
              {weatherData.wind} km/u
            </div>
          </div>
          <div className="highlightToday">
            <img className="image-today" src={img} alt="weather" />
            <span className="temperature-today">
              <span id="temperature">{weatherData.temperature}</span>
              <span id="celsius-element" className="boldTemp no-events">
                °C
              </span>
              <span id="fahrenheit-element">°F</span>
          </span>
            
          </div>
        </div>
        </div>
  
      </div>
    );
  } else {
    const apiKey = "9e5f1998e504ded9953b9c953b32bf1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      "Loading..."
    );
  }

}  

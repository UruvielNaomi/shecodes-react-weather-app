import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord
    });
  }

  function search() {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function changeCity(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form id="city-form" onSubmit={handleSubmit}>
            <input
              className="search-bar"
              type="search"
              id="city-input"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={changeCity}
            />
            <input className="search-button" type="submit" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
          
      </div>
    );
  } else {
    search();

    return (
      "Loading..."
    );
  }

}  
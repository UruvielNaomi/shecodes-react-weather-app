import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
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
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "9e5f1998e504ded9953b9c953b32bf1d";
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
          
      </div>
    );
  } else {
    search();

    return (
      "Loading..."
    );
  }

}  
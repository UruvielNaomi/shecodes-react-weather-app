import React from "react";
import img from "./images/clouds-icon.png";
import "./Weather.css";

export default function Weather() {
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
          <div id="city">Morges</div>
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
            Overcast clouds
          </div>
          <div className="col-3" id="humidity">
            82%
          </div>
          <div className="col-3" id="wind">
            2 km/u
          </div>
        </div>
        <img className="image-today" src={img} alt="weather" />
      <span className="temperature-today">
        <span id="temperature">22</span>
        <span id="celsius-element" className="boldTemp no-events">
          °C
        </span>
        <span id="fahrenheit-element">°F</span>
      </span>
      </div>
      </div>

    </div>
  );
}  
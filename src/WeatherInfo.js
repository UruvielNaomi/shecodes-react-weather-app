import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import CelsiusFahrenheit from "./CelsiusFahrenheit";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="row">
          <div className="col-12">
            <div className="searchedCity">{props.data.city}</div>
          </div>
      
        <div className="prediction">
          <div className="row">
            <div className="col-6">
              <div id="day-time">
                <FormattedDate date={props.data.date} />
              </div>
            </div>
            <div className="col-3">Humidity</div>
            <div className="col-3">Wind</div>
          </div>
  
          <div className="row">
            <div className="col-6" id="description">
              {props.data.description}
            </div>
            <div className="col-3" id="humidity">
              {props.data.humidity}%
            </div>
            <div className="col-3" id="wind">
              {props.data.wind} km/u
            </div>
          </div>
          <div className="highlightToday">
            <WeatherIcon code={props.data.icon} size={35}/>
            <CelsiusFahrenheit celsius={props.data.temperature}/>
                       
          </div>
        </div>
        </div>
        </div>
    )
}
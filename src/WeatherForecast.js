import React from "react";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast() {
    return (

        <div className="row">
        <div className="col-2">
          <DailyForecast maxtemp={17} mintemp={11} day="Mon" />
        </div>
        <div className="col-2">
          <DailyForecast maxtemp={15} mintemp={9} day="Tue" />
        </div>
        <div className="col-2">
          <DailyForecast maxtemp={14} mintemp={10} day="Wed" />
        </div>
        <div className="col-2">
          <DailyForecast maxtemp={16} mintemp={11} day="Thu" />
        </div>
        <div className="col-2">
          <DailyForecast maxtemp={18} mintemp={14} day="Fri" />
        </div>
      </div>
    )
}
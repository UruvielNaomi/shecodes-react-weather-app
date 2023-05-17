import React from "react";
import "./Values.css";

export default function Values() {
  return (
    <div className="Values">
      <div className="row">
        <div className="col-12">
          <div id="city">Morges</div>
        </div>
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
      </div>
    </div>
  );
}
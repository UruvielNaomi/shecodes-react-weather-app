import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Image from "./Image";

export default function App() {
  return (
    <div className="App">
      <div className="card border">
        <div className="row">
          <div className="col-6">
            <Weather defaultCity="Lausanne"/>
            <div className="row">
                    <div className="col-2">
                      <Forecast celsius={17} day="Mon" />
                    </div>
                    <div className="col-2">
                      <Forecast celsius={15} day="Tue" />
                    </div>
                    <div className="col-2">
                      <Forecast celsius={14} day="Wed" />
                    </div>
                    <div className="col-2">
                      <Forecast celsius={16} day="Thu" />
                    </div>
                    <div className="col-2">
                      <Forecast celsius={18} day="Fri" />
                    </div>
                  </div>
          </div>
          <div className="col-6">
            <Image />
          </div>
        </div>
      </div>      
    </div>
  );
}
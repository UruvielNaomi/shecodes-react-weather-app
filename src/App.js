import React from "react";
import "./App.css";
import Weather from "./Weather";
import Image from "./Image";


export default function App() {
  return (
    <div className="App">
      <div className="card border">
        <div className="row">
          <div className="col-7">
            <Weather defaultCity="Lausanne"/>  
          </div>
          <div className="col-5">
            <Image />
          </div>
        </div>
      </div>      
    </div>
  );
}
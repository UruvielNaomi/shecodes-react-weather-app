import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Values from "./Values";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Image from "./Image";

export default function App() {
  return (
    <div className="App">
      <div className="card border">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col">
                <Searchbar />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Values />
                <Temperature />
                <div class="text">
                  <div class="row">
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
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image />
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/UruvielNaomi/Weather-App-Project"
          target="_blank" rel="noopener noreferrer"
        >
          coded by Naomi Stacia <span role="img" aria-label="purple-heart">💜</span> click here for GitHub</a
        >
      </footer>
    </div>
  );
}
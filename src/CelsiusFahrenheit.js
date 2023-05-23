import React, { useState } from "react";
import "./CelsiusFahrenheit.css";

export default function CelsiusFahrenheit(props) {
    const [unit, setUnit] = useState("celsius")

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <span className="temperature-today">
              <span id="temperature">{props.celsius}</span>

              <span className="celsius-element fw-bolder">
                °C
              </span> <span> </span>
              <a href="/" className="fahrenheit-element fw-lighter" onClick={showFahrenheit}>°F</a>
            </span>
    );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <span className="temperature-today">
                  <span id="temperature">{Math.round(fahrenheit)}</span>
    
                  <a href="/" className="celsius-element fw-lighter" onClick={showCelsius}>
                    °C
                  </a> <span> </span>
                  <span className="fahrenheit-element fw-bolder">°F</span>
                </span>
        );
    }
}
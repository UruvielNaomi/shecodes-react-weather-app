import React from "react";
import img from "./images/mountain.svg";
import "./Image.css";

export default function Image() {
  return (
    <div className="image">
      <img className="background-image" src={img} alt="sun" />
    </div>
  );
}
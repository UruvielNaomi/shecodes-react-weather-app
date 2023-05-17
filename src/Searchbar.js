import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="Searchbar">
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
  );
}
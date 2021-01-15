import React from "react";
import './WeatherInfo.css'

const WeatherInfo = ({weather}) => {
  return (
    <div className="weatherInfoContainer">
      <h3>Current Weather in your area is _______</h3>
      <h4>Measures include</h4>
      <div>
        <div className="weatherMeasure">_______</div>
        <div className="weatherMeasure">_______</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
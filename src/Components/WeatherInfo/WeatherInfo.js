import React from "react";
import './WeatherInfo.css'

const WeatherInfo = ({weather}) => {
  return (
    <div className="weatherInfoContainer">
      <h3>Current Weather in your area: <span className="weatherDescription">{weather.description || "unknown"}</span></h3>
      <h4>Measures include</h4>
      <div>
        <div className="weatherMeasure">{`Temperature: ${weather.temperature || '-'}`}</div>
        <div className="weatherMeasure">{`Humidity: ${weather.humidity || '-'}`}</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
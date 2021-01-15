import React from "react";
import './App.css';
import ButtonPrimary from './Components/ButtonPrimary/ButtonPrimary';
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";

const App = () => {
  return (
    <div className="App">
      <WeatherInfo/>
      <div>
        <ButtonPrimary>
          Get Weather
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default App;

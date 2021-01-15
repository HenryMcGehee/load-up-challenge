import React from "react";
import './App.css';
import ButtonPrimary from './Components/ButtonPrimary/ButtonPrimary';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import usePosition from './Services/usePosition';
import useWeather from './Services/useWeather';

const App = () => {
  const { currentPosition, refreshCurrentPosition } = usePosition();
  const { currentWeather, refreshCurrentWeather } = useWeather();

  if (!currentPosition) {
    refreshCurrentPosition();
  }

  const getCurrentWeatherHandler = async () => {
    try {
      await refreshCurrentWeather(currentPosition);
    } catch (error) {
      alert(error.toString());
    }
  };

  return (
    <div className="App">
      <WeatherInfo weather={currentWeather}/>
      <div className="ButtonContainer">
        <ButtonPrimary onClick={getCurrentWeatherHandler}>
          Current Weather
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default App;

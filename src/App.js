import React from "react";
import './App.css';
import ButtonPrimary from './Components/ButtonPrimary/ButtonPrimary';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import usePosition from './Services/usePosition';

const App = () => {
  const { currentPosition, refreshCurrentPosition } = usePosition();

  if (!currentPosition) {
    refreshCurrentPosition();
  }

  console.log(currentPosition);

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

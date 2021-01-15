import { useState } from "react";
import { units } from '../Constants/units.js'

const UNITS = units.imperial;
const APIKEY = process.env.REACT_APP_APIKEY;

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    description: null,
    temperature: null,
    humidity: null,
  });

  const generateApiUrl = ({ lat, lon }) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS.unitName}&appid=${APIKEY}`;
  };

  const checkValidResponse = (response) => {
    if (response.cod !== 200) {
      throw new Error(response.message);
    }
  }

  const updateCurrentWeather = (result) => {
    const weatherDescription = result.weather.map((desc) => desc.description).join(" and ");
    const newWeather = {
      description: weatherDescription,
      temperature: `${result.main.temp}${UNITS.temperature}`,
      humidity: `${result.main.humidity}${UNITS.humidity}`,
    };
    setCurrentWeather(newWeather)
  };

  const refreshCurrentWeather = async ({ lat, lon }) => {
    await fetch(generateApiUrl({ lat, lon }))
    .then((res) => res.json())
    .then((result) => {
      checkValidResponse(result);
      updateCurrentWeather(result);
    });
  };

  return {
    currentWeather,
    refreshCurrentWeather,
  };
};

export default useWeather;
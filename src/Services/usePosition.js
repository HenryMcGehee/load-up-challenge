import { useState } from "react";

const usePosition = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  const refreshCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((response) => {
      setCurrentPosition({
        lat: response.coords.latitude,
        lon: response.coords.longitude,
      });
    });
  };

  return {
    currentPosition,
    refreshCurrentPosition,
  };
};

export default usePosition;

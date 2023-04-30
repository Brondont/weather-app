import React, { useState } from "react";
import WeatherStatus from "./WeatherStatus";
import InputField from "./InputField";
import Humidity from "./Humidity";
import Wind from "./Wind";
import axios from "axios";

interface weatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
}

const Weather: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [weatherType, setWeatherType] = useState<string>("");
  const [weatherDescription, setDesc] = useState<string>("");

  const deconstructData = (weatherData: weatherData): void => {
    setTemperature(weatherData.main.temp);
    setWind(weatherData.wind.speed);
    setWeatherType(weatherData.weather[0].main);
    setDesc(weatherData.weather[0].description);
    setHumidity(weatherData.main.humidity);
  };

  const resetData = (): void => {
    setWeatherType("");
    setTemperature(0);
    setWind(0);
    setHumidity(0);
    setDesc("");
  };

  const displayWeather = (cityName: string): void => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=13590d082f5966309f71629b0aab7ee0`;
    axios
      .get(url)
      .then((info) => deconstructData(info.data))
      .catch(() => {
        resetData();
      });
  };

  return (
    <div className="Main">
      <div className="weatherMain">
        <InputField displayWeather={displayWeather} />
        <WeatherStatus
          temperature={temperature}
          description={weatherDescription}
          weatherType={weatherType}
        />
      </div>
      <div className="weatherSubMain">
        <Wind wind={wind} />
        <Humidity humidity={humidity} />
      </div>
    </div>
  );
};

export default Weather;

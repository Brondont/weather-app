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

  const displayWeather = (countryName: string): void => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=13590d082f5966309f71629b0aab7ee0`;
    axios.get(url).then((info) => deconstructData(info.data));
  };

  return (
    <div>
      <div className="Main">
        <InputField displayWeather={displayWeather} />
        <WeatherStatus
          temperature={temperature}
          description={weatherDescription}
          weatherType={weatherType}
        />
      </div>
      <div className="SubMain">
        <Wind wind={wind} />
        <Humidity humidity={humidity} />
      </div>
    </div>
  );
};

export default Weather;

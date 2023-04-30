import "../App.css";
import React from "react";
import Clear from "./images/clear.png";
import Clouds from "./images/clouds.png";
import Drizzle from "./images/drizzle.png";
import Mist from "./images/mist.png";
import Rain from "./images/rain.png";
import Snow from "./images/snow.png";
import Search from "./images/search.png";

interface weatherStatus {
  temperature: number;
  weatherType: string;
  description: string;
}

const WeatherStatus = ({
  temperature,
  description,
  weatherType,
}: weatherStatus) => {
  var weatherImage: string;

  switch (weatherType) {
    case "Clear":
      weatherImage = Clear;
      break;
    case "Clouds":
      weatherImage = Clouds;
      break;
    case "Rain":
      weatherImage = Rain;
      break;
    case "Snow":
      weatherImage = Snow;
      break;
    case "Drizzle":
      weatherImage = Drizzle;
      break;
    case "Mist":
      weatherImage = Mist;
      break;
    default:
      weatherImage = "not found";
  }

  return (
    <div className="Weather">
      <div className="WeatherType">{weatherType}</div>
      <div className="weatherImage">
        {weatherImage === "not found" ? (
          <div className="notFound">
            <img src={Search} alt="/" /> <br></br>
            City not found !
          </div>
        ) : (
          <img className="weatherImage" src={weatherImage} alt="/" />
        )}
      </div>
      <div className="temperature">{temperature}°C</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default WeatherStatus;

import React, { useState } from "react";
import "../App.css";

const InputField = ({
  displayWeather,
}: {
  displayWeather: (cityName: string) => void;
}) => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    displayWeather(city);
  };

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="input"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter a city's name.."
          className="inputBox"
        />
        <button className="inputButton" type="submit">
          Search
        </button>
      </fieldset>
    </form>
  );
};

export default InputField;

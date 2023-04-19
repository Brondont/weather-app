import React, { useState } from "react";
import "../App.css";

const InputField = ({
  displayWeather,
}: {
  displayWeather: (countryName: string) => void;
}) => {
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    displayWeather(country);
  };

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="input"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        placeholder="Enter city name ..."
        className="inputBox"
      />
      <button className="inputButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputField;

import HumidityImage from "./images/humidity.png";

const Humidity = ({ humidity }: { humidity: number }) => {
  return (
    <div className="humidity">
      Humidity
      <br></br>
      <img className="SubImage" src={HumidityImage} alt="/" />
      <br></br>
      {humidity}%
    </div>
  );
};

export default Humidity;

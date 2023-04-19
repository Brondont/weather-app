import "../App.css";
import WindImage from "./images/wind.png";

const Wind = ({ wind }: { wind: number }) => {
  return (
    <div className="wind">
      Wind
      <br></br>
      <img className="SubImage" src={WindImage} alt="/" />
      <br></br>
      {wind}Km/h
    </div>
  );
};

export default Wind;

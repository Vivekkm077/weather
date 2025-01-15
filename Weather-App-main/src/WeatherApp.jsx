import { useState } from "react";

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState();

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#1976d2" }}>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
      <div className="footer">
        Git Repo:-{" "}
        <a href="https://github.com/Vivekkm077/weather" target="_blank">
          Click Here!
        </a>{" "}
        &nbsp;|&nbsp; LinkedIn:-{" "}
        <a
          href="https://www.linkedin.com/in/vivek-kumar-5859631b6/"
          target="_blank"
        >
          Click Here!
        </a>
      </div>
    </div>
  );
}

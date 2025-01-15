import "./SearchBox.css";

import { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button, formLabelClasses } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  let API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherData = async (city) => {
    try {
      let res = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      let result = {
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather:
          jsonRes.weather[0].description.charAt(0).toUpperCase() +
          jsonRes.weather[0].description.slice(1),
        city: city.charAt(0).toUpperCase() + city.slice(1),
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      let newInfo = await getWeatherData(city);
      setCity("");
      setErr(false);
      updateInfo(newInfo);
    } catch (err) {
      setErr(true);
      setCity("");
      updateInfo();
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <TextField
            id="city"
            label="City Name"
            variant="filled"
            required
            value={city}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
      {err && <p style={{ color: "red" }}>No Such City Found</p>}
    </div>
  );
}

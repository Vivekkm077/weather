import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

  let HOT_URL =
    "https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fHww";

  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <p style={{ color: "#1976d2", margin: "15px", fontSize: "1.5rem" }}>
        <b>
          <u>Location</u>:- {info.city}
        </b>
      </p>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity >= 70
                  ? RAIN_URL
                  : info.temp > 25
                  ? HOT_URL
                  : COLD_URL
              }
              alt="weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.weather}&nbsp;
                {info.humidity >= 70 ? (
                  <ThunderstormIcon />
                ) : info.temp > 25 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Max Temp: {info.tempMax}&deg;C</p>
                <p>Min Temp: {info.tempMin}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>
                  The Weather Can Be Described As <i>{info.weather}</i> and
                  feels like <i>{info.feelsLike}&deg;C</i>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

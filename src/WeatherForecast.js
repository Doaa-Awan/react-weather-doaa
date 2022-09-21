import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
        <div>
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="forecast" key={index}>
                  <div className="col-2">
                  <WeatherForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
    );
  } else {
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

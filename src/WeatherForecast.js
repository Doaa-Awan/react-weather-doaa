import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <div className="forecast" id="forecastList">
            <WeatherForecastDay data={forecast[1]} />
          </div>
        </div>
        <div className="col">
          <div className="forecast" id="forecastList">
            <WeatherForecastDay data={forecast[2]} />
          </div>
        </div>
        <div className="col">
          <div className="forecast" id="forecastList">
            <WeatherForecastDay data={forecast[3]} />
          </div>
        </div>
        <div className="col">
          <div className="forecast" id="forecastList">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
        <div className="col">
          <div className="forecast" id="forecastList">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
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

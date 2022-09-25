import React from "react";

export default function WeatherForecastDay(props) {
  let url = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°c`;
  }

  function day() {
    console.log(props.data);
    console.log(props.data.weather[0].description);
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <span className="forecast-col">
      <div className="forecast-day text-uppercase ">{day()}</div>
      <div className="d-flex justify-content-center">
        <img
          src={url}
          alt={props.data.weather[0].description}
          className="forecast-img"
        />
      </div>
      <div className="forecast-temp">
        {maxTemperature()} <br />
        <span className="forecast-temp-min"> {minTemperature()}</span>
      </div>
    </span>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <span className="forecast-col">
      <div className="forecast-day text-uppercase">
        {day()}
      </div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} color="white" />
        {/* <i className={props.icon}></i> */}
      </div>
      <div className="forecast-temp">
        {maxTemperature()} <br />
        <span className="forecast-temp-min"> {minTemperature()} C</span>
      </div>
    </span>
  );
}
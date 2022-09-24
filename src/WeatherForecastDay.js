import React from "react";
// import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let url = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
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
      <div className="forecast-day text-uppercase">{day()}</div>
      <div className="forecast-img">
        {/* <WeatherIcon code={props.data.weather[0].icon} color="white" /> */}
        {/* <img src={props.icon} /> */}
        <img src={url} alt={props.data.weather[0].description} />
      </div>
      <div className="forecast-temp">
        {maxTemperature()} <br />
        <span className="forecast-temp-min"> {minTemperature()} C</span>
      </div>
    </span>
  );
}

import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="temp" id="tempNumber">
          {Math.round(props.celsius)}°
          <span className="units">
            <span className="c">C </span>
            <span className="unitLine">| </span>
            <a href="/" onClick={showFahrenheit} className="f">
              F
            </a>
          </span>
        </div>
        {/* <div>
          <p className="weather-description text-capitalize">
            {props.description}
          </p>
          <p className="feels-like">
            Feels like <span>{Math.round(props.feel)}</span>° C
          </p>
        </div> */}
      </div>
    );
  } else {
    return (
      <div>
        <div className="temp" id="tempNumber">
          {Math.round(fahrenheit())}°
          <span className="units">
            <a href="/" onClick={showCelsius} className="c">
              C{" "}
            </a>
            <span className="unitLine">| </span>
            <span className="f">F</span>
          </span>
        </div>
        {/* <div>
          <p className="weather-description text-capitalize">
            {props.description}
          </p>
          <p className="feels-like">
            Feels like <span>{(Math.round(props.feel) * 9) / 5 + 32}</span>° F
          </p>
        </div> */}
      </div>
    );
  }
}

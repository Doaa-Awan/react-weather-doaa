import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="temp" id="tempNumber">
      {Math.round(props.celsius)}°
      <span className="units">
        <a className="c">C </a>| <a className="f">F</a>
      </span>
    </div>
  );
}

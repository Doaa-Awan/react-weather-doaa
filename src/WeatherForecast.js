import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="forecast" id="forecastList">
          <div className="forecast-col f1">
            <div className="forecast-day text-uppercase" id="f1">
              {props.forecastDay}
            </div>
            <div className="forecast-icon">
                <WeatherIcon code="01d" color="white"/>
              {/* <i className={props.icon}></i> */}
            </div>
            <div className="forecast-temp">
              {props.tempMax}° < br/>
              <span className="forecast-temp-min"> {props.tempMin}° C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

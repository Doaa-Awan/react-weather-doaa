import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import RefreshBtn from "./RefreshBtn";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col">
        <main>
          <div className="mainLine">
            <button
              id="location-button"
              className="fa-solid fa-location-dot location-icon"
            ></button>
            <h1 id="location">
              {props.data.city}, {props.data.country}
            </h1>
            <h2>
              Current Temperature
              <RefreshBtn/>
             
            </h2>
            <FormattedDate date={props.data.date} />

            <div className="info">
              <ul>
                <li>
                  <span className="wind">Wind: </span>
                  <span id="wind-speed"></span> {Math.round(props.data.wind)}{" "}
                  km/h
                </li>
                <li>
                  <span className="humidity">Humidity: </span>
                  <span id="humidity"> {props.data.humidity}</span> %
                </li>
              </ul>
            </div>
          
          </div>
        </main>
      </div>
      <div className="col">
        <section>
          <h3>NOW</h3>
          <div className="d-flex justify-content-center">
            <WeatherIcon code={props.data.icon} color="#42a5f5" />
            <WeatherTemperature
              celsius={props.data.temperature}
              description={props.data.description}
              feel={props.data.feel}
            />
          </div>
          <div>
            <p className="weather-description">
              {props.data.description}
            </p>
            <p className="feels-like">
              Feels like <span>{Math.round(props.data.feel)}</span>° C
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


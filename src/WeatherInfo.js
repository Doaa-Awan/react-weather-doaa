import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
              <button
                id="refresh"
                className="fa-solid fa-arrow-rotate-right refresh-icon"
              ></button>
            </h2>
            <FormattedDate date={props.data.date} />

            <div className="info">
              <ul>
                <li>
                  <span className="wind">Wind: </span>
                  <span id="wind-speed"></span> {props.data.wind} km/h
                </li>
                <li>
                  <span className="humidity">Humidity: </span>
                  <span id="humidity"> {props.data.humidity}</span> %
                </li>
              </ul>
            </div>
            <button id="blankBtn" className="blankBtn btns"></button>
            <button id="blueBtn" className="blueBtn btns"></button>
            <button id="greenBtn" className="greenBtn btns"></button>
            <button id="pinkBtn" className="pinkBtn btns"></button>
            <button id="yellowBtn" className="yellowBtn btns"></button>
          </div>
        </main>
      </div>
      <div className="col">
        <section>
          <h3>NOW</h3>
          <div className="d-flex justify-content-center">
          <div className="temp" id="tempNumber">
            {Math.round(props.data.temperature)}°
          <WeatherIcon code={props.data.icon}/>
          </div>
          </div>
          {/* <img
            src={props.data.iconUrl}
            alt=""
            className="icon"
            id="icon-element"
          /> */}
          <p
            className="weather-description text-capitalize"
            id="weather-description"
          >
            {props.data.description}
          </p>
          <p className="feels-like">
            Feels like <span id="feels-like"></span>° C
          </p>
        </section>
      </div>
    </div>
  );
}

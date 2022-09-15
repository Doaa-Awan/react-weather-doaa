import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    // setReady(true);
  }

  function search() {
    const apiKey = "9d66353d7a075841285d6608a0acc09a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    // event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="videoContainer bgImgColor">
        <video
          autoPlay
          loop
          muted
          plays-inline="true"
          className="videoBG"
          id="vid"
        >
          <source id="src" src="#" type="video/mp4" />
        </video>

        <div className="weather-app">
          <div className="container">
            <nav className="row">
              <form onSubmit={handleSubmit} className="col" id="search-form">
                <input
                  type="search"
                  placeholder="Search for a city"
                  autoComplete="off"
                  autoFocus
                  id="search-value"
                  className="search-bar"
                  onChange={updateCity}
                />
                <button className="fa-solid fa-magnifying-glass search-icon"></button>
              </form>
              {/* <button
                className="col-2 fa-solid fa-lightbulb lightBtn"
                id="light"
              ></button> */}
            </nav>
            <WeatherInfo data={weatherData} />

            <div className="forecast" id="forecastList"></div>
            {/* <button
              className="fa-solid fa-volume-high audioBtn"
              id="audioBtn"
            ></button> */}
            <div className="col-xl-5">
              <small className="col-12 code-link">
                <a
                  href="https://github.com/Doaa-Awan/react-weather-doaa"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Open-Source Code{" "}
                </a>
                by{" "}
                <a
                  href="https://rad-daifuku-2c6ded.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Doaa Awan
                </a>
              </small>
            </div>

            <label className="switch">
              <input type="checkbox" id="toggle" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

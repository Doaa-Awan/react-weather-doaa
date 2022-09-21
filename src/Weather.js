import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import PreLoader from "./PreLoader";
import Footer from "./Footer";
import Switch from "./Switch";
import WeatherForecast from "./WeatherForecast";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

// import rain from "../public/videos/rain.mp4";

// import Video from "./Video";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feel: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
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
          <source id="src" src="" type="video/mp4" />
        </video>
        {/* <Video code={props.data.icon} /> */}

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
            <div className="row">
              <div className="col-7">
                <WeatherForecast coord={weatherData.coord} />
              </div>
              <div>
                <ReactAnimatedWeather
                  icon="RAIN"
                  color="white"
                  size={64}
                  animate={true}
                />
              </div>
            </div>
            {/* <button
              className="fa-solid fa-volume-high audioBtn"
              id="audioBtn"
            ></button> */}
            <Footer />
            <Switch />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <PreLoader />;
  }
}

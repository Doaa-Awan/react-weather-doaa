import React from "react";

export default function Weather() {
  <div className="videoContainer bgImgColor">
    <video autoplay loop muted plays-inline className="videoBG" id="vid">
      <source id="src" src="#" type="video/mp4" />
    </video>

    <div className="weather-app">
      <div className="container">
        <nav className="row">
          <form className="col" id="search-form">
            <input
              type="search"
              placeholder="Search for a city"
              autoComplete="off"
              autoFocus
              id="search-value"
              className="search-bar"
            />
            <button className="fa-solid fa-magnifying-glass search-icon"></button>
          </form>
          <button
            className="col-2 fa-solid fa-lightbulb lightBtn"
            id="light"
          ></button>
        </nav>
        <div className="row">
          <div className="col">
            <main>
              <div className="mainLine">
                <button
                  id="location-button"
                  className="fa-solid fa-location-dot location-icon"
                ></button>
                <h1 id="location">Niagara Falls</h1>
                <h2>
                  Current Temperature
                  <button
                    id="refresh"
                    className="fa-solid fa-arrow-rotate-right refresh-icon"
                  ></button>
                </h2>
                <ul className="date">
                  <li className="current-day">Monday</li>
                  <li className="current-time">12:45</li>
                </ul>
                <div className="info">
                  <ul>
                    <li>
                      <span className="wind">Wind:</span>
                      <span id="wind-speed"></span> km/h
                    </li>
                    <li>
                      <span className="humidity">Humidity: </span>
                      <span id="humidity"></span> %
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
              <div className="temp" id="tempNumber"></div>
              <img src="#" alt="" className="icon" id="icon-element" />
              <p className="weather-description" id="weather-description">
                Mostly Cloudy
              </p>
              <p className="feels-like">
                Feels like <span id="feels-like"></span>° C
              </p>
            </section>
          </div>
        </div>
        <div className="forecast" id="forecastList"></div>
        <button className="audioBtn" id="audioBtn">
          AUDIO
        </button>
        <div className="col-xl-5">
          <small className="col-12 code-link">
            <a
              href="https://github.com/Doaa-Awan/weather-react-app-doaa"
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
  </div>;
}

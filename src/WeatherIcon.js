import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_DAY",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_DAY",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "010d": "RAIN",
  "010n": "RAIN",
  "011d": "SLEET",
  "011n": "SLEET",
  "013d": "SNOW",
  "013n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};
  return (
    <span className="icon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#42a5f5"
        size={200}
        animate={true}
      />
    </span>
  );
}

import React from "react";
import rain from "./images/rain.mp4"

export default function Video(props) {
//   const codeMapping = {
//     "01d": "/images",
//     "01n": "Clear night",
//   };
  return (
    <video autoPlay loop muted plays-inline="true" className="videoBG" id="vid">
      <source id="src" src={rain} type="video/mp4" />
    </video>
  );
}

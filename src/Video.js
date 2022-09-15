import React from "react";

export default function Video(props) {
//   const codeMapping = {
//     "01d": "/images",
//     "01n": "Clear night",
//   };
  return (
    <video autoPlay loop muted plays-inline="true" className="videoBG" id="vid">
      <source id="src" src="../images/rain.mp4" type="video/mp4" />
    </video>
  );
}

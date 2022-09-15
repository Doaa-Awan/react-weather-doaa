import React from "react";
import bird from "./images/bird.gif"
import loading from "./images/loading.gif"

export default function PreLoader() {
  return (
    <div id="preloader">
      <img class="bird" src={bird} alt="Loading..." />
      <img class="loading-text" src={loading} alt="Loading..." />
    </div>
  );
}

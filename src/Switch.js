import React from "react";

export default function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" id="toggle" />
      <span className="slider round"></span>
    </label>
  );
}

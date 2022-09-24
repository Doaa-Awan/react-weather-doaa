import React from "react";

export default function RefreshBtn() {
  function reload() {
    window.location.reload(false);
  }

  return (
    <button
      className="fa-solid fa-arrow-rotate-right refresh-icon"
      onClick={reload}
    ></button>
  );
}

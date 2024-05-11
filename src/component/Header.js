import React from "react";
import "../css/Header.css";
import IMAGES from "./Images";
export default function Header() {
  return (
    <div>
      <div className="header">
        <img src={IMAGES.AULOGO} className="imageStyle" />
        <img src={IMAGES.AMBUJALOGO} className="imageStyle" />
      </div>
    </div>
  );
}

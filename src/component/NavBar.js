import React from "react";
import IMAGES from "./Images";
import '../css/NavBar.css'
export default function NavBar() {
  return (
    <div>
      <div className="navBarHeader">
        <img src={IMAGES.MENU} className="menu"/>
        <div className="titelText" >
            <p>HOME</p>
            <p>BLOG</p>
            <p>COURSE</p>
            <p>SIGN-UP</p>
            </div>
      </div>
    </div>
  );
}


import React from "react";
import banner from "../../Images/banner.png";
import "./Banner.css"
function Banner() {
  return (
    <div className="nav-banner">
    <img src={banner} alt="banner kasa" />
    <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
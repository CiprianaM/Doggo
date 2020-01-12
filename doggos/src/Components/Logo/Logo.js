import React from "react";
import logo from "./logo1.png";

import "./Logo.css";

function Logo() {
  return (

        <div className="img-container">

        <img src={logo} className="logo-animated"></img>
        </div>

  )
}
export default Logo;
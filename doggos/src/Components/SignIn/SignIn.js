import React, { useState } from "react";
import Form from "./Form/Form";
import logo from "./logo1.png";

import "./SignIn.css";

function SignIn() {
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }

  return (
    <div className="sign-in-cont-background">
      <div className="sign-in-cont-unite">
        <div className="img-container">

        <img src={logo} className="logo-animated" ></img>
        </div>
        <div className="sign-in-container">

          <div className="sign-in-h1">Member Login</div>
          <Form addEvent={insertEvent}></Form>
          <span className="sign-in-span1">
            Forgot
            <a href="" className="sign-in-forgot">
              {" "}
              Username/Password?
            </a>
          </span>
          <a href="" className="sign-in-signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

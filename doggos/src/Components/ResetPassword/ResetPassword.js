import React, { useState } from "react";
import Form from "./Form/Form";
import logo from "./logo1.png";

import "./ResetPassword.css";

function ResetPassword() {
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }

  return (
    <div className="resetpass-cont-background">
      <div className="resetpass-cont-unite">
        <div className="img-container" className="logo-animated">

        <img src={logo} className="logo-animated"></img>
        </div>
        <div className="resetpass-container">

          <div className="resetpass-h1">Reset Password</div>
          <Form addEvent={insertEvent}></Form>

        </div>
      </div>
    </div>
  );
}
export default ResetPassword;

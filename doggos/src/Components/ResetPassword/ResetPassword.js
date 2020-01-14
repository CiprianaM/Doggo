import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Form from "./Form/Form";
import NameLogo from "../Dog/NavBar/Logo/Logo";

import "./ResetPassword.css";
import Logo from "../Logo/Logo";

function ResetPassword() {
  let history = useHistory();
  function handleSignIn() {
    history.push("./signin");
  }

  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }

  return (
    <div className="resetpass-cont-background">
      <div className="resetpass-cont-unite">
        <div className="reset-with-logo">
          <NameLogo></NameLogo>
          <Logo></Logo>
        </div>
        <div className="resetpass-container">
          <div className="resetpass-h1">Reset Password</div>
          <Form addEvent={insertEvent} handSI={handleSignIn}></Form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(ResetPassword);

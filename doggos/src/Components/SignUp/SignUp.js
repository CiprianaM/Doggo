import React, { useState } from "react";
import Form from "./Form/Form";
import Logo from '../Logo/Logo';
import { makeStyles } from "@material-ui/core/styles";
import UploadButton from '../Buttons/UploadButton';

import "./SignUp.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  },

}));

function SignUp() {
  const classes = useStyles();
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }
  return (
    <div className="sign-up-cont-background">
      <div className="sign-up-cont-unite">
        <div className="sign-up-cont-unite-sub">
       <Logo></Logo>
       <div className="img-container">

          <UploadButton></UploadButton>
       </div>

        </div>
        <div className="sign-up-container">
          <div className="sign-up-h1">Welcome aboard!</div>
          <Form addEvent={insertEvent}></Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

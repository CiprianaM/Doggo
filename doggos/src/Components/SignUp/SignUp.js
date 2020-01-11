import React, { useState } from "react";
import Form from "./Form/Form";
import logo from "./logo1.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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
        <div className="img-container-signup">
          <img src={logo} className="logo-animated" className="animated-logo"></img>
          <div className={classes.root} >
            <input
              accept="image/*"
              className={classes.input}className="flex"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file" className="upload-label">
              <Button variant="contained" color="primary" component="span" className="upload-button">
                MY Picture
              </Button>
            </label>
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

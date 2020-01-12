import React, { useState } from "react";
import Form from "./Form/Form";
import ProfilePic from './ProfilePic/ProfilePic';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Sadie from './ProfilePic/ProfilePic';

import { makeStyles } from "@material-ui/core/styles";
import UploadButton from "../Buttons/UploadButton";

import "./Profile.css";


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

function Profile() {
  const classes = useStyles();
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }
  return (
    <div className="profile-cont-background">
      <div className="profile-cont-unite">
<Sadie></Sadie>
        <div className="profile-container">
          <div className="profile-h1">Sadie</div>
          <Form addEvent={insertEvent}></Form>
        </div>
      </div>
    </div>
  );
}
export default Profile;

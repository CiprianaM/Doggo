import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { makeStyles } from "@material-ui/core/styles";

import "./ProfilePic.css";
import Sadie from "../../Dog/Other/sadie.jpg";

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

function ProfilePic() {
  const classes = useStyles();
  return (
    <div className="profilePic-unite-container">
      <div className="profile-pic-container">
        <img src={Sadie} className="profilePic"></img>
      </div>
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  );
}
export default ProfilePic;

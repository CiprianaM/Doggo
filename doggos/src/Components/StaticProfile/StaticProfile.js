import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Sadie from "./ProfilePic/ProfilePic";

import "./StaticProfile.css";
import Logo from "../Logo/Logo";
import { func } from "prop-types";

function StaticProfile() {
  let history = useHistory();
  const handleEditProfileClick = e => {
    history.push("/editprofile");
  };

  function handleCarouselClick() {
    history.push("/dog");
  }
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }
  return (
    <div className="profile-cont-background">
      <div className="static-profile-cont-unite">
        <span className="carousel-button" onClick={handleCarouselClick}>
          <Logo></Logo>
        </span>

        <Sadie></Sadie>
        <div className="static-profile-container">
          <div className="profile-h1">Sadie</div>
          <div className="static-info-div">irina1234@gmail.com</div>
          <div className="static-info-div">
            Fluffy, intelligent girl. Brag much? Oh yeah! I also run much. And
            bark.
          </div>
          <div>
            <input
              type="button"
              value="EDIT PROFILE"
              className="edit-profile-button"
              onClick={handleEditProfileClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default StaticProfile;

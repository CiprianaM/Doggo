import React from "react";
import Form from "./Form/Form";
import {useHistory} from 'react-router-dom';

import Sadie from "./ProfilePic/ProfilePic";

import "./EditProfile.css";

function StaticProfile() {
  let history = useHistory();
  function insertEvent(event) {
    // ApiClient.createEvent(event).then(() =>
    //   ApiClient.getAllEvents().then(events => setEvents(events))
    // );
  }
  function directEditClick () {
    history.push('/profile');
  }
  return (
    <div className="profile-cont-background">
      <div className="profile-cont-unite">
        <Sadie></Sadie>
        <div className="profile-container">
          <div className="profile-h1">Sadie</div>
          <Form addEvent={insertEvent} redirStaticProfile={directEditClick}></Form>
        </div>
      </div>
    </div>
  );
}
export default StaticProfile;

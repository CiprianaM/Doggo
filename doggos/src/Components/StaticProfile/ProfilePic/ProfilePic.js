import React from "react";

import "./ProfilePic.css";
function ProfilePic({picToDisplay}) {
  return (
    <div className="static-profilePic-unite-container">
      <div className="static-profile-pic-container">
        <img src={picToDisplay} alt="" className="static-profilePic"></img>
      </div>
    </div>
  );
}
export default ProfilePic;

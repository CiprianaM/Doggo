import React from "react";

import "./ProfilePic.css";
import Sadie from "../../Dog/Other/sadie.jpg";

function ProfilePic() {
  return (
    <div className="static-profilePic-unite-container">
      <div className="static-profile-pic-container">
        <img src={Sadie} className="static-profilePic"></img>
      </div>
    </div>
  );
}
export default ProfilePic;

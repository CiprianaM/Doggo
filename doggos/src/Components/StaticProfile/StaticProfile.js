import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import ClientApi from "../../ClientApi";
import Sadie from "./ProfilePic/ProfilePic";

import "./StaticProfile.css";
import Logo from "../Logo/Logo";

function StaticProfile() {
  const defaultState = {
    photo: "",
    gender: "female",
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    description: ""
  };

  const [pupper, setPupper] = useState(defaultState);
  const CurrentPupperId = () => {
    let { id } = useParams();
    return id;
  };
  const current = CurrentPupperId();


  useEffect(() => {
    ClientApi.getNewlyCreatedPupper(current).then(newPupper => setPupper(newPupper));
  }, []);

  let history = useHistory();
  const handleEditProfileClick = () => {
    history.push(`/editprofile/${current}`);
    
  };


  function handleCarouselClick() {
    history.push(`/dog/${current}`);
  }

  return (
    <div className="profile-cont-background">
      <div className="static-profile-cont-unite">
        <span className="carousel-button" onClick={handleCarouselClick}>
          <Logo></Logo>
        </span>

        <Sadie picToDisplay={pupper.picture}></Sadie>
        <div className="static-profile-container">
  <div className="profile-h1">{pupper.username}</div>
  <div className="static-info-div">{pupper.email}</div>
          <div className="static-info-div">
            {pupper.description}
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

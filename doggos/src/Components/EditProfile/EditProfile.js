import React from "react";
import Form from "./Form/Form";
import ClientApi from '../../ClientApi';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";

import Sadie from "./ProfilePic/ProfilePic";

import "./EditProfile.css";

function EditProfile() {

  const defaultState = {
    picture: "",

    username: "",
    email: "",
    password: "",
    confirmpass: "",
    description: ""
  };

  const [pupper, SetPupper] = useState(defaultState);
  const CurrentPupperId = () => {
    let { id } = useParams();
    return id;
  };
  const current = CurrentPupperId();
  
  const handlePic = e => {
    SetPupper({
      ...pupper,
      picture:
        "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4131.jpg"
    });
    console.log(pupper.picture, 'this is the picture')
  };


  const history=useHistory();
  const directToProfileSubmit = () => {
    history.push(`/profile/${current}`);
  };


  return (
    <div className="profile-cont-background">
      <div className="profile-cont-unite">
        <Sadie changePic={Sadie}></Sadie>
        <div className="profile-container">
          <div className="profile-h1">Sadie</div>
          <Form
            redirStaticProfile={directToProfileSubmit}
          ></Form>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;

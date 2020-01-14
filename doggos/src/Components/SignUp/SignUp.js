import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ClientApi from "../../ClientApi";
import Form from "./Form/Form";
import Logo from "../Logo/Logo";
import NameLogo from "../Dog/NavBar/Logo/Logo";

import UploadButton from "../Buttons/UploadButton";
import GenderButtons from "../Buttons/GenderButtons";

import "./SignUp.css";

function SignUp() {
  let history = useHistory();
  let id = 0;
  const defaultState = {
    photo: "",
    gender: "female",
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    description: ""
  };

  const [pupper, SetPupper] = useState(defaultState);

  const handlePic = e => {
    //I am leaving the console.logs here for future implementation of picture upload
    // console.log(e.target.files);
    SetPupper({
      ...pupper,
      photo:
        "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4131.jpg"
    });
  };
  const handleGender = event => {
    SetPupper({
      ...pupper,
      gender: event.target.value
    });
  };
  const handleForm = async partialPupper => {
    const data = Object.assign(pupper, partialPupper);
    await saveToDB(data);
    SetPupper(data);
  };
  const saveToDB = async data => {
    const response = await ClientApi.createPupper(data);
    directToProfileSubmit(response.id); //make it asyncronous
    console.log(response, "coming from response");
    console.log(
      await ClientApi.getNewlyCreatedPupper(response.id),
      "this is coming from the get request"
    );
  };

  const directToProfileSubmit = id => {
    history.push(`/profile/${id}`);
  };

  function insertPupper(event) {
    ClientApi.createPupper(event).then(() =>
      ClientApi.getAllPuppers().then(events => SetPupper(events))
    );
  }
  return (
    <div className="sign-up-cont-background">

      <div className="sign-up-cont-unite">

          <div className="sign-up-cont-unite-sub">
            <div className="sign-up-with-logo">
              <NameLogo></NameLogo>
            </div>
            <Logo></Logo>
            <div className="sign-up-img-container">
              <UploadButton getImage={handlePic}></UploadButton>
            </div>
            <div className="gender-buttons-container">
              <GenderButtons getGender={handleGender}></GenderButtons>
            </div>
          </div>
          <div className="sign-up-container">
            <div className="sign-up-h1">Welcome aboard!</div>
            <Form
              directProfSubmit={directToProfileSubmit}
              addPupper={handleForm}
            ></Form>
          </div>

      </div>
    </div>
  );
}
export default SignUp;

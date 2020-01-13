import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ClientApi from "../../ClientApi";
import Form from "./Form/Form";
import Logo from "../Logo/Logo";

import UploadButton from "../Buttons/UploadButton";
import GenderButtons from '../Buttons/GenderButtons';

import "./SignUp.css";

function SignUp() {
  const [pupper, SetPupper] = useState(0);

  let history = useHistory();

  function directToProfileSubmit() {
    history.push("/profile");
  }

  function insertPupper(event) {
    ClientApi.createPupper(event).then(() =>
      ClientApi.getAllPuppers().then(events => SetPupper(events))
    );
  }
  return (
    <div className="sign-up-cont-background">
      <div className="sign-up-cont-unite">
        <div className="sign-up-cont-unite-sub">
          <Logo></Logo>
          <div className="img-container">
            <UploadButton></UploadButton>
          </div>
          <div className="gender-buttons-container">
          <GenderButtons></GenderButtons>

          </div>
        </div>
        <div className="sign-up-container">
          <div className="sign-up-h1">Welcome aboard!</div>
          <Form
            directProfSubmit={directToProfileSubmit}
            addPupper={insertPupper}
          ></Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

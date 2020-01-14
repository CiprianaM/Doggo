import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form/Form";
import Logo from "../Logo/Logo";
import NameLogo from "../Dog/NavBar/Logo/Logo";

import "./SignIn.css";

function SignIn({ handleClick }) {
  function route(event) {
    // ApiClient.getOnePupper(event).then(() =>
    // );
  }

  let history = useHistory();

  function handleClick() {
    history.push("/dog");
  }
  function handleResetClick() {
    history.push("/reset");
  }
  function handleSignUpClick() {
    history.push("/signup");
  }

  return (
    <div className="sign-in-cont-background">
      <div className="sign-in-cont-unite">
        <div className="sign-in-with-logo">
          <NameLogo></NameLogo>
          <Logo></Logo>
        </div>
        <div className="sign-in-container">
          <div className="sign-in-h1">Member Login</div>
          <Form redirected={handleClick}></Form>
          <span className="sign-in-span1">
            Forgot
            <a href="" className="sign-in-forgot" onClick={handleResetClick}>
              {" "}
              Username/Password?
            </a>
          </span>
          <a href="" className="sign-in-signup" onClick={handleSignUpClick}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

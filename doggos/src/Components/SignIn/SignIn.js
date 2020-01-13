import React, { useState } from "react";
import {useHistory, withRouter} from 'react-router-dom';
import Form from "./Form/Form";
import Logo from "../Logo/Logo";
import logo from "./logo1.png";

import "./SignIn.css";

function SignIn({handleClick}) {
  console.log('abc');
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
        <Logo></Logo>
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

import React, { useState, useEffect } from "react";
import {useHistory, withRouter} from 'react-router-dom';
import ClientApi from '../../ClientApi';
import NavBar from "./NavBar/NavBar";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import dogList from './list';

import "./Dog.css";

function Dog() {

  let history = useHistory();

  function profileClick() {
    history.push("/profile");
  }
  const printPuppers = async () => {
    const result = await ClientApi.getAllPuppers();
    console.log(result);
    return result;
  }
  printPuppers()
  const [index, setIndex] = useState(0);
  const dogs = dogList;

  const likeDislikeClick = () => {
    if (index>7) {
      setIndex((index) => index=0);
    } else {
      setIndex((index) => index+1);
    }
  }
  return (
    <div className="dog-component">
      <NavBar redirToProfile={profileClick}></NavBar>
      <MainContainer list={dogs} ind={index}></MainContainer>
      <Footer passedFunc={likeDislikeClick} ind={index}></Footer>
    </div>
  );
}

export default Dog;

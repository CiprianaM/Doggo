import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import ClientApi from "../../ClientApi";
import NavBar from "./NavBar/NavBar";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import dogList from "./list";

import "./Dog.css";

function Dog() {
  let history = useHistory();

  const CurrentPupperId = () => {
    let { id } = useParams();
    return id;
  };
  const current = CurrentPupperId();
  console.log(current);

  function profileClick() {
    history.push(`/profile/${current}`);
  }
  const printPuppers = async () => {
    const result = await ClientApi.getAllPuppers();
    return result;
  };
  printPuppers();
  const [index, setIndex] = useState(0);
  const dogs = dogList;

  const likeDislikeClick = () => {
    if (index > 7) {
      setIndex(index => (index = 0));
    } else {
      setIndex(index => index + 1);
    }
  };
  return (
    <div className="dog-component">
      <NavBar redirToProfile={profileClick}></NavBar>
      <MainContainer list={dogs} ind={index}></MainContainer>
      <Footer passedFunc={likeDislikeClick} ind={index}></Footer>
    </div>
  );
}

export default Dog;

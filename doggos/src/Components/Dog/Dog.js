import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import dogList from './list';

import "./Dog.css";

function Dog() {
  const [index, setIndex] = useState(0);
  const dogs = dogList;

  const handleClick = () => {
    if (index>7) {
      setIndex((index) => index=0);
    } else {
      setIndex((index) => index+1);
    }
  }
  return (
    <div className="dog-component">
      <NavBar></NavBar>
      <MainContainer list={dogs} ind={index}></MainContainer>
      <Footer passedFunc={handleClick} ind={index}></Footer>
    </div>
  );
}

export default Dog;

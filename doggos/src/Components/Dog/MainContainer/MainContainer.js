import React from "react";
import Description from "./Description/Description";

import "./MainContainer.css";

export default function MainContainer(props) {
  const currentElem = props.list[props.ind];

  return (
    <div className="container">
      <img src={currentElem.picture} className="dog-image"></img>
      <Description
        nameVal={currentElem.name}
        genderVal={currentElem.gender}
        descriptionVal={currentElem.description}
      ></Description>
    </div>
  );
}

import React from "react";

import "./Description.css";

export default function Description(props) {
  return (
    <div className="description-container">
      <div className="description-name-gender">
        <div className="description-name">{props.nameVal}</div>
        <div className="description-gender">{props.genderVal}</div>
      </div>
      <div className="description-description-wrapper">
        <div className="description-description">{props.descriptionVal}</div>
      </div>
    </div>
  );
}

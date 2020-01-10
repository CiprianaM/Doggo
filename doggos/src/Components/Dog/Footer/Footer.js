import React from 'react';
import DislikeButton from '../../Buttons/DislikeButton';
import LikeButton from '../../Buttons/LikeButton';

import './Footer.css';



export default function Footer(props) {

  return (
    <div className="footer">
      <DislikeButton passedFunc2={props.passedFunc}></DislikeButton>
      <LikeButton passedFunc2={props.passedFunc}></LikeButton>
    </div>
  );
}
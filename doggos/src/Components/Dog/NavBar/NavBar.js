import React from 'react';
import ProfileButton from '../../Buttons/ProfileButton';
import ChatButton from '../../Buttons/ChatBubble';
import Logo from './Logo/Logo';

import './NavBar.css';



export default function NavBar() {

  return (
    <div className="nav-bar">
      <ProfileButton></ProfileButton>
      <Logo></Logo>
      <ChatButton></ChatButton>
    </div>
  );
}
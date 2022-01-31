import React from 'react';
import { NavLink } from 'react-router-dom';
import chevron from '../assets/images/chevron-left-solid.svg';
import microphone from '../assets/images/microphone-solid.svg';
import cog from '../assets/images/cog-solid.svg';

function Header() {
  return (
    <nav className="flex flex-row justify-between mt-4">
      <NavLink to="/"><img className="w-4" alt="back arrow icon" src={chevron} /></NavLink>
      <div className="flex flex-row">
        <img className="w-4 mr-3" alt="microphone icon" src={microphone} />
        <img className="w-4" alt="settings icon" src={cog} />
      </div>
    </nav>
  );
}

export default Header;

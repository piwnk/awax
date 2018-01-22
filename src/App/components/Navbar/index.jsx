import React from 'react';

import logo from '../../img/Logo.png';
import './Navbar.css';

import sections from '../../data/sections';

import Tabs from '../Tabs';

export default () => (
  <nav>
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Tabs names={sections} />
    </div>
  </nav>
);

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="brand">
      <a href="/">Math Magicians</a>
    </h1>
    <ul className="list">
      <li className="list-items">
        <NavLink to="/" exact> Home</NavLink>
      </li>
      <li className="pipe">|</li>
      <li className="list-items">
        <NavLink to="/calculator"> Calculator</NavLink>
      </li>
      <li className="pipe">|</li>
      <li className="list-items">
        <NavLink to="/quote"> Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

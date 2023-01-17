import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="brand">
      <a href="/">Math Magicians</a>
    </h1>
    <ul className="list">
      <li className="list-items">
        <a href="/">Home</a>
      </li>
      <li className="pipe">|</li>
      <li className="list-items">
        <a href="/calculator">Calculator</a>
      </li>
      <li className="pipe">|</li>
      <li className="list-items">
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Docudrop</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

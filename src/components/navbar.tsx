import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/button">Increasing Button</Link>
        </li>
        <li>
          <Link to="/list">Todo List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/nowhere">Nowhere</Link>
        </li>
      </ul>
    </nav>
  );
};

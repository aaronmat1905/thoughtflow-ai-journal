// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/homepage" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/write-post" className="nav-link">Write Post</Link>
        </li>
        <li className="nav-item">
          <Link to="/view-post" className="nav-link">View Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link">ChatAI</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg'; // Import the logo image using ES modules

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item logo-item">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <span className="logo-text">Thoughtflow.ai</span>
          </Link>
        </li>
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
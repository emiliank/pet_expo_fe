import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'; 


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
        <Link to="/">
            <img src={logo} alt="Pet Expo Logo" className="logo-image" /> 
            <span>Pet Expo</span>
          </Link>  
            </div>
        <nav className="navbar">
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li className="dropdown">
              <NavLink to="/gallery">Types</NavLink>
              <div className="dropdown-content">
                <NavLink to="/dogs">Dogs</NavLink>
                <NavLink to="/cats">Cats</NavLink>
                <NavLink to="/birds">Birds</NavLink>
              </div>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>  
      </div>
    </header>
  );
};

export default Header;


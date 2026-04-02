import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// React Functional Component
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SANSKRITIQ PILATES</Link>
      <div className="nav-links">
        <NavLink 
          to="/schedule" 
          className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}
        >
          Schedule
        </NavLink>
        <NavLink 
          to="/philosophy" 
          className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}
        >
          Philosophy
        </NavLink>
        <NavLink 
          to="/studio" 
          className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}
        >
          Studio
        </NavLink>
        <NavLink 
          to="/journal" 
          className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}
        >
          Journal
        </NavLink>
      </div>
      <button className="btn-primary">BOOK SESSION</button>
    </nav>
  );
}

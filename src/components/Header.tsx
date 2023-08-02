import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <header>
        <h2>Bloggers</h2>
      </header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
function Header() {
  return (
    <div className="header">
      <h2 className="header-text">Dobrodosli!</h2>
      <ul className="header-nav">
        <Link to="/myapp">Početna</Link>
        <Link to="/npm-packages">NPM Paketi</Link>
        <Link to="/tools">Alati</Link>
      </ul>
    </div>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
function Header(props) {
  return (
    <div className="header">
      <h2 className="header-text">
        {props.lang === 'serbian'
          ? props.infoSerbian.welcome
          : props.infoEnglish.welcome}
      </h2>
      <ul className="header-nav">
        <Link to="/myapp">
          {props.lang === 'serbian'
            ? props.infoSerbian.home
            : props.infoEnglish.home}
        </Link>
        <Link to="/npm-packages">
          {props.lang === 'serbian'
            ? props.infoSerbian.npmPackages
            : props.infoEnglish.npmPackages}
        </Link>
        <Link to="/tools">
          {props.lang === 'serbian'
            ? props.infoSerbian.tools
            : props.infoEnglish.tools}
        </Link>
      </ul>
    </div>
  );
}

export default Header;

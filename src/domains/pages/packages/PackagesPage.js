import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../../styles/PackagesPage.css';

function PackagesPage() {
  return (
    <div className="packages-page">
      <div className="packages-container">
        <div className="form-builder-container">
          <Link className="form-builder-title" to="formbuilder">
            Form Builder Package
          </Link>

          <h5 className="form-builder-description">
            Some description of the pacakge.<br></br>I don't know what it means
            yet<br></br> or what it does...Stay tuned!
          </h5>
        </div>
      </div>
      <div className="packages-display">
        <Outlet />
      </div>
    </div>
  );
}

export default PackagesPage;

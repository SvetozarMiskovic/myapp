import react from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../../../styles/PackagesPage.css';
import FormBuilder from '../../demo/FormBuilderApp/FormBuilder';

function PackagesPage() {
  return (
    <div className="packages-page">
      <div className="packages-container">
        <div className="form-builder-container">
          <Link className="form-builder-title" to="npm-packages/:formbuilder">
            Form Builder Package
          </Link>

          <h5 className="form-builder-description">
            Some description of the pacakge.<br></br>I don't know what it means
            yet<br></br> or what it does...Stay tuned!
          </h5>
        </div>
      </div>
      <div className="packages-display">
        <Routes>
          <Route path="npm-packages/:formbuilder" element={<FormBuilder />} />
        </Routes>
      </div>
    </div>
  );
}

export default PackagesPage;

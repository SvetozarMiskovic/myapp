import react from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PackagesPage.css';
function PackagesPage() {
  return (
    <div className="packages-page">
      <div className="form-builder-container">
        <Link className="form-builder-title" to={'/npm-packages/:formbuilder'}>
          Form Builder Package
        </Link>

        <h5 className="form-builder-description">
          Some description of the pacakge. I don't know what it means yet or
          what it does...Stay tuned!
        </h5>
      </div>
    </div>
  );
}

export default PackagesPage;

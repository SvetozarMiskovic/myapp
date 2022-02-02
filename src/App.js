import { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Pocetna from './domains/pages/pocetna/Pocetna';
import Tools from './domains/pages/tools/Tools';
import PackagesPage from './domains/pages/packages/PackagesPage';
import FormBuilder from './domains/demo/FormBuilderApp/FormBuilder';
import DisplayForm from './domains/demo/FormBuilderApp/DisplayForm';
import {useTranslation} from 'react-i18next'

function App() {
    const {t} = useTranslation()
  const [selectedForm, setSelectedForm] = useState();
  const [isEditing, setIsEditing] = useState(false);


  return (
      <Suspense fallback={null}>
    <div className="App">
      
      <Routes>
        <Route
          path="/myapp"
          element={
            <Pocetna />
          }
        />
        <Route
          path="/npm-packages/*"
          element={<PackagesPage setSelectedForm={setSelectedForm} />}
        >
          <Route
            path="formbuilder/"
            element={
              <FormBuilder
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setSelectedForm={setSelectedForm}
              />
            }
          />
        </Route>
        <Route path="/tools" element={<Tools />} />
        {selectedForm ? (
          <Route
            path={`/displayform:${selectedForm.formID}`}
            element={<DisplayForm selectedForm={selectedForm} />}
          />
        ) : null}
      </Routes>
    </div>
      </Suspense>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import FormBuilder from './domains/demo/FormBuilderApp/FormBuilder';
import Header from './domains/header/Header';
import Pocetna from './domains/pages/pocetna/Pocetna';
import Tools from './domains/pages/tools/Tools';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/myapp" element={<Pocetna />} exact />
          <Route path="/npm-packages" element={<FormBuilder />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

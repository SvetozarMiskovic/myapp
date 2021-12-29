import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './domains/header/Header';
import Pocetna from './domains/pages/pocetna/Pocetna';
import Tools from './domains/pages/tools/Tools';
import PackagesPage from './domains/pages/packages/PackagesPage';
import FormBuilder from './domains/demo/FormBuilderApp/FormBuilder';
import DisplayForm from './domains/demo/FormBuilderApp/DisplayForm';

function App() {
  const [selectedForm, setSelectedForm] = useState({});
  const [lang, setLang] = useState('serbian');
  const [infoSerbian] = useState({
    welcome: 'Dobrodošli!',
    home: 'Početna',
    npmPackages: 'NPM Paketi',
    tools: 'Alati',
    contactInfo: 'KONTAKT INFORMACIJE',
    shortDesc: 'KRATKI OPIS',
    descInfo1: `Moje ime je Svetozar Mišković, imam 23 godine,
    živim i radim u Banja Luci. Developmentom se bavim poslednjih
    godinu dana i stekao sam znanje u sledećim tehnologijama:`,
    descInfo2: `Možete da me kontakirate klikom na email, putem instagrama ili pozivom na broj!`,
  });
  const [infoEnglish] = useState({
    welcome: 'Welcome!',
    home: 'Home',
    npmPackages: 'NPM Packages',
    tools: 'Tools',
    contactInfo: 'CONTACT INFORMATION',
    shortDesc: 'SHORT DESCRIPTION',
    descInfo1: `My name is Svetozar Miskovic, I am 23 years old and 
    I live and work in Banja Luka. I've been 1 year in Software Development and I've gained knowledge in the following techonlogies:`,
    descInfo2: `You can contact me by clicking on the email address,via Instagram or call me on my cellphone!`,
  });

  function changeLanguageHandler(language) {
    setLang(language);
  }
  return (
    <div className="App">
      <Header lang={lang} infoSerbian={infoSerbian} infoEnglish={infoEnglish} />

      <Routes>
        <Route
          path="/myapp"
          element={
            <Pocetna
              changeLanguage={changeLanguageHandler}
              lang={lang}
              infoSerbian={infoSerbian}
              infoEnglish={infoEnglish}
            />
          }
        />
        <Route
          path="/npm-packages/*"
          element={<PackagesPage setSelectedForm={setSelectedForm} />}
        >
          <Route
            path="formbuilder/"
            element={<FormBuilder setSelectedForm={setSelectedForm} />}
          />
        </Route>
        <Route path="/tools" element={<Tools />} />
        <Route
          path={`/displayform:${selectedForm.formID}`}
          element={<DisplayForm selectedForm={selectedForm} />}
        />
      </Routes>
    </div>
  );
}

export default App;

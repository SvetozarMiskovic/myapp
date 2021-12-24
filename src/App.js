import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import FormBuilder from './domains/demo/FormBuilderApp/FormBuilder';
import Header from './domains/header/Header';
import Pocetna from './domains/pages/pocetna/Pocetna';
import Tools from './domains/pages/tools/Tools';

function App() {
  const [lang, setLang] = useState('serbian');
  const [infoSerbian] = useState({
    welcome: 'Dobrodošli!',
    home: 'Početna',
    npmPackages: 'NPM Paketi',
    tools: 'Alati',
    contactInfo: 'KONTAKT INFORMACIJE',
    shortDesc: 'KRATKI OPIS',
    descInfo1: `Moje ime je Svetozar Miskovic, imam 23 godine,
    zivim i radim u Banja Luci. Developmentom se bavim poslednjih
    godinu dana i stekao sam znanje u sledecim tehnologijama:`,
    descInfo2: `Mozete da me kontakirate klikom na email, putem instagrama ili pozivom na broj!`,
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
    descInfo2: `You can contact me by clicking on the email address,via Instagram or via call me on my cellphone!`,
  });

  function changeLanguageHandler(language) {
    setLang(language);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          lang={lang}
          infoSerbian={infoSerbian}
          infoEnglish={infoEnglish}
        />

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
            exact
          />
          <Route path="/npm-packages" element={<FormBuilder />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

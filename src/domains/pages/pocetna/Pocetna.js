import React from 'react';
import '../../../styles/Pocetna.css';
function Pocetna() {
  return (
    <div className="pocetna">
      <div className="pocetna-kontakt">
        <h3 className="pocetna-naslov">KONTAKT INFORMACIJE</h3>
        <div className="pocetna-ime">
          <i className="fas fa-signature pocetna-ime-ikona"></i>
          <span className="ime">Svetozar Miskovic</span>
        </div>
        <div
          className="pocetna-email"
          onClick={() => {
            window.open(
              'mailto:svetozarmiskovic98@gmail.com?subject=EmailViaWebsite'
            );
          }}
        >
          <i className="fas fa-envelope pocetna-email-ikona"></i>
          <span className="email">svetozarmiskovic98@gmail.com</span>
        </div>
        <div
          className="pocetna-github"
          onClick={() => {
            window.open('https://github.com/SvetozarMiskovic', '_blank');
          }}
        >
          <i className="fab fa-github pocetna-github-ikona"></i>
          <span className="github">github.com/SvetozarMiskovic</span>
        </div>
        <div
          className="pocetna-instagram"
          onClick={() => {
            window.open('https://www.instagram.com/tosveevsot', '_blank');
          }}
        >
          <i className="fab fa-instagram pocetna-instagram-ikona"></i>
          <span className="instagram">@tosveevsot</span>
        </div>
        <div className="pocetna-broj">
          <i className="fas fa-phone pocetna-broj-ikona"></i>
          <span className="broj">063/791-630</span>
        </div>
      </div>
      <div className="pocetna-opis">
        <h3 className="pocetna-opis-naslov">KRATKI OPIS</h3>
        <div className="pocetna-opis-text">
          <p className="opis-1">
            Moje ime je Svetozar Miskovic, imam 23 godine,<br></br>zivim i radim
            u Banja Luci. Developmentom se bavim poslednjih<br></br>
            godinu dana i stekao sam znanje u sledecim tehnologijama:
          </p>
          <div className="tehnologije">
            <i className="fab fa-html5 html"></i>
            <i className="fab fa-css3-alt css"></i>
            <i className="fab fa-js-square js"></i>
            <i className="fab fa-react react"></i>
          </div>
          <p className="opis-2">
            Mozete da me kontakirate klikom na email, putem instagrama ili
            pozivom na broj!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pocetna;

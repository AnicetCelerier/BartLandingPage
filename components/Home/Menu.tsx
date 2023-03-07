import React from "react";

const Menu = () => {
  return (
    <header className="bartlp--header">
      <nav className="bartlp--header-navbar">
        <div className="bartlp--header-navbar-left">
            <img src="../assets/images/logo-bart.png" alt="logo bart"/>
        </div>
        <div className="bartlp--header-navbar-right">
          <ul id="bartlp--header-navbar-right-links">
            <li data-target="cta"><button id="access-button">Accéder à la cantine</button></li>
            <li data-target="contact"><button id="submit-button">Demander la cantine</button></li>
          </ul>
          <div className="bartlp--header-navbar-right-menu">
            <i className="fa-solid fa-bars icon-default"></i>
            <i className="fa-solid fa-xmark icon-hover"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;

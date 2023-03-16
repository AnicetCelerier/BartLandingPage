import React from "react";

const Menu = () => {
  return (
    <header className="bartlp--header">
      <nav className="bartlp--header-navbar">
        <div className="bartlp--header-navbar-left">
          <img src="../assets/images/logo-bart.png" alt="logo bart" />
        </div>
        <div className="bartlp--header-navbar-right">
          <ul id="bartlp--header-navbar-right-links">
            <li
              // data-target="cta"
              className="bartlp--header-navbar-right-button-1"
            >
              <button className="access-button">
                <span className="access-button-wrapper-l">
                  Accéder à la cantine
                </span>
                <span className="access-button-wrapper-s">La cantine</span>
              </button>
            </li>
            <li
              // data-target="contact"
              className="bartlp--header-navbar-right-button-2"
            >
              <button className="submit-button">Demander la cantine</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;

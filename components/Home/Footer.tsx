import React from "react";

const Footer = () => {
  return (
    <footer className="bartlp--footer">
      <ul className="bartlp--footer-block-1">
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Mentions légales</a>
        </li>
        <li>
          <a>À propos</a>
        </li>
      </ul>
      <div className="bartlp--footer-block-2">
        <div className="bartlp--footer-block-2-section-1">
          <a href="https://cantine.bartapp.club/">
            <img src="../assets/images/logo-bart2.png" alt="logo bart" />
          </a>
          <div>Copyright © 2023 Bartapp. Tous droits réservés.</div>
        </div>
        <ul className="bartlp--footer-block-2-section-2">
          <li>
            <a href="https://www.instagram.com/bartappfr/?hl=fr">
              <img
                src="../assets/images/logo-instagram.png"
                alt="logo instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/bartapp/"></a>
            <img src="../assets/images/logo-linkedin.png" alt="logo linkedin" />
          </li>
          <li>
            <a href="https://www.facebook.com/Bartappfr">
              <img
                src="../assets/images/logo-facebook.png"
                alt="logo facebook"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

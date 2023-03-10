import React from "react";

const Footer = () => {
  return (
    <footer className="bartlp--footer">
      <ul className="bartlp--footer-block-1">
        <li>Contact</li>
        <li>Mentions légales</li>
        <li>À propos</li>
      </ul>
      <div className="bartlp--footer-block-2">
        <div className="bartlp--footer-block-2-section-1">
          <img src="../assets/images/logo-bart2.png" alt="logo bart" />
          <div>Copyright © 2023 Bartapp. Tous droits réservés.</div>
        </div>
        <ul className="bartlp--footer-block-2-section-2">
          <li>
            <img
              src="../assets/images/logo-instagram.png"
              alt="logo instagram"
            />
          </li>
          <li>
            <img src="../assets/images/logo-twitter.png" alt="logo twitter" />
          </li>
          <li>
            <img src="../assets/images/logo-facebook.png" alt="logo facebook" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

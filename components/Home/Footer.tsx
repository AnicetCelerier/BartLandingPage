import React from "react";

const Footer = () => {
  return (
    <footer className="bartlp--footer">
      <ul className="bartlp--footer-block-1">
        <li>
          <a href="https://mcusercontent.com/69e3f71a03232ebb521a625c1/files/73f97774-23cd-343f-7a70-c96e906cdd57/Bart_Cantine_CGUCGVMention_Le_gales.pdf">
            Conditions générales d’utilisation
          </a>
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
            <a href="https://www.linkedin.com/company/bartapp/">
              <img
                src="../assets/images/logo-linkedin.png"
                alt="logo linkedin"
              />
            </a>
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

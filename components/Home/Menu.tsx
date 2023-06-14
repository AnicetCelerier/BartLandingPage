import React from "react";
import useHeader from "@/hooks/useHead";

const Menu = () => {
  const { scrollPos } = useHeader();

  return (
    <header className={`bartlp--header ${scrollPos}`}>
      <nav className="bartlp--header-navbar">
        <div className={`bartlp--header-navbar-left ${scrollPos}`}>
          <a href="#top">
            <img src="../assets/images/logo-bart.png" alt="logo bart" />
            <img
              src="../assets/images/logo-bart-hover.png"
              alt="logo bart hover"
            />
          </a>
        </div>
        <div className="bartlp--header-navbar-right">
          <a
            href="https://cantine.bartapp.club/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="access-button">Commander</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Menu;

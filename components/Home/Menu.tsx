import React from "react";
import useHeader from "@/hooks/useHead";

const Menu = () => {
  const { scrollPos } = useHeader();

  console.log(scrollPos, ">>>>>>>>>>>>>>>>>");
  return (
    <header className={`bartlp--header ${scrollPos}`}>
      <nav className="bartlp--header-navbar">
        <div className="bartlp--header-navbar-left">
          <img src="../assets/images/logo-bart.png" alt="logo bart" />
        </div>
        <div className="bartlp--header-navbar-right">
          <ul id="bartlp--header-navbar-right-links">
            <li
              className="bartlp--header-navbar-right-button-1"
            >
              <a href="https://cantine.bartapp.club/">
                <button className="access-button">
                  <span className="access-button-wrapper-l">
                    Accéder à la cantine
                  </span>
                  <span className="access-button-wrapper-s">La cantine</span>
                </button>
              </a>
            </li>
            <li className="bartlp--header-navbar-right-button-2">
              <a href="#form">
                <button className="submit-button">Essayez Bart Cantine</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    //   <header className="bartlp--header">
    //   <nav className="bartlp--header-navbar">
    //     <div className="bartlp--header-navbar-left">
    //       <img src="../assets/images/logo-bart.png" alt="logo" />
    //     </div>
    //     <div className="bartlp--header-navbar-right">
    //       <ul id="bartlp--header-navbar-right-links">
    //         <li data-target="who"><button className="button1">bouton1</button></li>
    //         <li data-target="projects"><button className="button1">bouton2</button></li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Menu;

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
          <nav className={Mobile ? "navMenu active" : "navMenu"}>
            <div className="navLogo">
              <img src="./images/logo.png" alt="Logo" />
            </div>
            <ul onClick={() => setMobile(false)}>
              <li>
                <a href="/">
                  <i className="fa fa-user"></i> Your Account
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-address-book"></i> Contact
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-copy"></i> Feedback
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

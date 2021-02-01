import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LandingPage from "./landing-page.jsx";
import Portfolio from "./portfolio.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import "./navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div id="landing-page">
      <header className={navbarClasses.join(" ")}>
        <Router>
          <nav className="navigation">
            <HashLink className="logo" smooth to="./landing-page#landing-page">
              K.
            </HashLink>
            <ul>
              <li>
                <HashLink smooth to="/portfolio#portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about/#about">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/contact/#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </nav>
        </Router>
      </header>
      <LandingPage />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Navbar;

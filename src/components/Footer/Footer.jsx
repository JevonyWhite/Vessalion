import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import logoText from "../../assets/Vessalion File/VessalionFileG.svg";
import vessalion from "../../assets/Vessalion File/OnlyLogo.svg";
import { GrLinkedin } from "react-icons/gr";

const Footer = ({ menuOpen, setMenuOpen }) => {

    const handleNavClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };

  return (
    <div className={`footer ${menuOpen ? 'menu-open' : ''}`}>
      <div className="footer-top">
        {/* Col 1 — Brand */}
        <div className="footer-brand">
          {/* Replace with your actual logo */}
          <div className="footer-logo">
            <img src={vessalion} alt="Vessalion Logo" className="footer-onlyLogo"/>
            <img src={logoText} alt="Vessalion Logo" className="footer-logo-text"/>
          </div>
          <p className="footer-tagline">
            Connecting global resources.
            <br />
            Delivering value worldwide.
          </p>
          <p className="footer-copy">© 2026 Vessalion. All Rights Reserved.</p>
        </div>

        {/* Col 2 — Company */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Company</h4>
          <ul className="footer-col-links">
            <li>
              <Link to="/about#who-we-are" onClick={handleNavClick}>Who We Are</Link>
            </li>
            <li>
              <Link to="/about#what-we-do" onClick={handleNavClick}>What We Do</Link>
            </li>
            <li>
              <Link to="/industries" onClick={handleNavClick}>Industries Served</Link>
            </li>
            <li>
              <Link to="/capabilities" onClick={handleNavClick}>Capabilities</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 — Resources */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Resources</h4>
          <ul className="footer-col-links">
            <li>
              <Link to="/compliance" onClick={handleNavClick}>Compliance & Legal</Link>
            </li>
            <li>
              <Link to="/frequently-asked-questions" onClick={handleNavClick}>FAQs</Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={handleNavClick}>Privacy Policy</Link>
              </li>
              <li>
              <Link to="/terms-of-use" onClick={handleNavClick}>Terms of Use</Link>
            </li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Contact</h4>
          <ul className="footer-col-links footer-col-links--contact">
            <li>
              <i className="ti ti-mail" aria-hidden="true" />
              contact@vessalion.com
            </li>
            <li>
              <i className="ti ti-phone" aria-hidden="true" />
              (786) 701-6181
            </li>
            <li>
              <i className="ti ti-map-pin" aria-hidden="true" />
              Wyoming, USA
            </li>
          </ul>
        </div>

        {/* Col 5 — Follow Us */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Follow Us</h4>
          <div className="footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <GrLinkedin/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="footer-bottom">
        <span />
        <div className="footer-bottom-links">
          <Link to="/terms-of-use" onClick={handleNavClick}>Terms of Use</Link>
          <Link to="/privacy-policy" onClick={handleNavClick}>Privacy Policy</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "../Header/Header.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about#who-we-are" },
  { label: "What We Do", path: "/about#what-we-do" },
  { label: "Compliance", path: "/compliance" },
  { label: "Industries", path: "/industries" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Markets", path: "/markets" },
  { label: "Contact", path: "/contact", isButton: true },
];

const MenuOverlay = ({ menuOpen, setMenuOpen, onScroll }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const handleScroll = () => onScroll(el.scrollTop > 10);
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  return (
    <div className="menu-overlay" ref={overlayRef}>
      <nav className="menu-overlay-nav">
        <h2 className="menu-overlay-brand">Vessalion</h2>
        <div className="menu-overlay-links-wrapper">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="menu-overlay-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="menu-circle menu-circle--1" />
      <div className="menu-circle menu-circle--2" />
      <div className="menu-circle menu-circle--3" />
      <div className="menu-circle menu-circle--4" />
      <div className="menu-circle menu-circle--5" />
    </div>
  );
};

export default MenuOverlay;